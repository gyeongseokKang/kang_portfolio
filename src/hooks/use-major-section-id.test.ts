import { renderHook, act, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useMajorSectionId } from "./use-major-section-id";

// Mock the app-sidebar module
vi.mock("@/shared/ui/app-sidebar", () => ({
  FIRST_NAV_ITEM_ID: "Experience",
  NAV_ITEMS_ID: ["Experience", "Project", "Activity", "Achievements", "Retrospective"],
}));

describe("useMajorSectionId", () => {
  let mockElements: Map<string, HTMLElement>;
  let eventListeners: Map<string, Array<() => void>>;
  let rafCallback: FrameRequestCallback | null = null;

  beforeEach(() => {
    mockElements = new Map();
    eventListeners = new Map([ 
      ["scroll", []],
      ["resize", []]
    ]);
    rafCallback = null;

    // Mock document.getElementById
    vi.spyOn(document, "getElementById").mockImplementation((id: string) => {
      return mockElements.get(id) || null;
    });

    // Mock window.addEventListener
    vi.spyOn(window, "addEventListener").mockImplementation(
      (event: string, handler: any, options?: any) => {
        if (eventListeners.has(event)) {
          eventListeners.get(event)!.push(handler);
        }
      }
    );

    // Mock window.removeEventListener
    vi.spyOn(window, "removeEventListener").mockImplementation(
      (event: string, handler: any) => {
        if (eventListeners.has(event)) {
          const listeners = eventListeners.get(event)!;
          const index = listeners.indexOf(handler);
          if (index > -1) {
            listeners.splice(index, 1);
          }
        }
      }
    );

    // Mock window.requestAnimationFrame
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCallback = cb;
      return 1;
    });

    // Mock window.cancelAnimationFrame
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});

    // Set default window dimensions
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 768,
    });

    Object.defineProperty(document.documentElement, "clientHeight", {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    mockElements.clear();
    eventListeners.clear();
  });

  const createMockElement = (
    id: string,
    rect: Partial<DOMRect>
  ): HTMLElement => {
    const el = document.createElement("section");
    el.id = id;
    
    vi.spyOn(el, "getBoundingClientRect").mockReturnValue({
      top: rect.top || 0,
      bottom: rect.bottom || 0,
      left: rect.left || 0,
      right: rect.right || 0,
      width: rect.width || 0,
      height: rect.height || 0,
      x: rect.x || 0,
      y: rect.y || 0,
      toJSON: () => ({}),
    } as DOMRect);

    mockElements.set(id, el);
    return el;
  };

  const triggerRAF = () => {
    if (rafCallback) {
      act(() => {
        rafCallback!(0);
        rafCallback = null;
      });
    }
  };

  describe("initialization", () => {
    it("should return FIRST_NAV_ITEM_ID as initial value", () => {
      const { result } = renderHook(() => useMajorSectionId());

      expect(result.current).toBe("Experience");
    });

    it("should compute active section on mount", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 400, bottom: 800, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      expect(result.current).toBe("Experience");
    });

    it("should register scroll and resize event listeners", () => {
      renderHook(() => useMajorSectionId());

      expect(window.addEventListener).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function),
        { passive: true }
      );

      expect(window.addEventListener).toHaveBeenCalledWith(
        "resize",
        expect.any(Function),
        { passive: true }
      );
    });
  });

  describe("section visibility calculation", () => {
    it("should identify the section with the largest visible area", () => {
      // Experience is partially visible (100px)
      createMockElement("Experience", { top: -300, bottom: 100, height: 400 });
      // Project is fully visible (400px)
      createMockElement("Project", { top: 100, bottom: 500, height: 400 });
      // Activity is partially visible (268px)
      createMockElement("Activity", { top: 500, bottom: 768, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      expect(result.current).toBe("Project");
    });

    it("should handle section fully above viewport", () => {
      createMockElement("Experience", { top: -500, bottom: -100, height: 400 });
      createMockElement("Project", { top: 0, bottom: 400, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      expect(result.current).toBe("Project");
    });

    it("should handle section fully below viewport", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 900, bottom: 1300, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      expect(result.current).toBe("Experience");
    });

    it("should handle section partially above viewport", () => {
      createMockElement("Experience", { top: -200, bottom: 200, height: 400 });
      createMockElement("Project", { top: 200, bottom: 600, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Experience has 200px visible, Project has 400px visible
      expect(result.current).toBe("Project");
    });

    it("should handle section partially below viewport", () => {
      // window.innerHeight = 768
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 400, bottom: 1200, height: 800 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Experience has 400px visible, Project has 368px visible (768 - 400)
      expect(result.current).toBe("Experience");
    });

    it("should clamp visible height to actual section height", () => {
      // Very tall section that extends beyond viewport
      createMockElement("Experience", { top: -500, bottom: 1500, height: 2000 });
      createMockElement("Project", { top: 1500, bottom: 1900, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Experience visible area is clamped to viewport height (768)
      expect(result.current).toBe("Experience");
    });
  });

  describe("scroll event handling", () => {
    it("should update active section on scroll", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 400, bottom: 800, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();
      expect(result.current).toBe("Experience");

      // Simulate scroll - Experience moves up, Project becomes more visible
      mockElements.get("Experience")!.getBoundingClientRect = vi
        .fn()
        .mockReturnValue({
          top: -200,
          bottom: 200,
          height: 400,
          left: 0,
          right: 0,
          width: 0,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect);

      mockElements.get("Project")!.getBoundingClientRect = vi
        .fn()
        .mockReturnValue({
          top: 200,
          bottom: 600,
          height: 400,
          left: 0,
          right: 0,
          width: 0,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect);

      act(() => {
        eventListeners.get("scroll")!.forEach((listener) => listener());
      });

      triggerRAF();

      expect(result.current).toBe("Project");
    });

    it("should use requestAnimationFrame for throttling", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });

      renderHook(() => useMajorSectionId());

      const rafSpy = vi.spyOn(window, "requestAnimationFrame");

      act(() => {
        eventListeners.get("scroll")!.forEach((listener) => listener());
      });

      expect(rafSpy).toHaveBeenCalled();
    });

    it("should not schedule multiple RAF calls for consecutive scroll events", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });

      renderHook(() => useMajorSectionId());

      triggerRAF(); // Initial computation

      const rafSpy = vi.spyOn(window, "requestAnimationFrame");

      // Trigger multiple scroll events rapidly
      act(() => {
        eventListeners.get("scroll")!.forEach((listener) => listener());
        eventListeners.get("scroll")!.forEach((listener) => listener());
        eventListeners.get("scroll")!.forEach((listener) => listener());
      });

      // Should only schedule one RAF
      expect(rafSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("resize event handling", () => {
    it("should recalculate on window resize", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 400, bottom: 800, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      act(() => {
        eventListeners.get("resize")!.forEach((listener) => listener());
      });

      triggerRAF();

      expect(result.current).toBe("Experience");
    });

    it("should handle viewport height changes", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 400, bottom: 800, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Change viewport height
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 500,
      });

      act(() => {
        eventListeners.get("resize")!.forEach((listener) => listener());
      });

      triggerRAF();

      // Should recalculate with new viewport height
      expect(result.current).toBe("Experience");
    });
  });

  describe("edge cases", () => {
    it("should handle no sections found", () => {
      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Should maintain initial value
      expect(result.current).toBe("Experience");
    });

    it("should handle single section", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      expect(result.current).toBe("Experience");
    });

    it("should handle all sections out of viewport", () => {
      createMockElement("Experience", { top: -500, bottom: -100, height: 400 });
      createMockElement("Project", { top: 1000, bottom: 1400, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Should keep previous or default value
      expect(result.current).toBe("Experience");
    });

    it("should handle sections with zero height", () => {
      createMockElement("Experience", { top: 0, bottom: 0, height: 0 });
      createMockElement("Project", { top: 0, bottom: 400, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      expect(result.current).toBe("Project");
    });

    it("should use document.documentElement.clientHeight as fallback", () => {
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 0,
      });

      Object.defineProperty(document.documentElement, "clientHeight", {
        writable: true,
        configurable: true,
        value: 600,
      });

      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      expect(result.current).toBe("Experience");
    });

    it("should handle equal visibility for multiple sections", () => {
      // Both sections have equal visible area
      createMockElement("Experience", { top: 0, bottom: 200, height: 200 });
      createMockElement("Project", { top: 200, bottom: 400, height: 200 });

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Should pick the first one encountered
      expect(result.current).toBe("Experience");
    });
  });

  describe("cleanup", () => {
    it("should remove event listeners on unmount", () => {
      const { unmount } = renderHook(() => useMajorSectionId());

      unmount();

      expect(window.removeEventListener).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function)
      );

      expect(window.removeEventListener).toHaveBeenCalledWith(
        "resize",
        expect.any(Function)
      );
    });

    it("should cancel pending RAF on unmount", () => {
      const cancelSpy = vi.spyOn(window, "cancelAnimationFrame");

      const { unmount } = renderHook(() => useMajorSectionId());

      act(() => {
        eventListeners.get("scroll")!.forEach((listener) => listener());
      });

      unmount();

      expect(cancelSpy).toHaveBeenCalled();
    });

    it("should not update state after unmount", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 400, bottom: 800, height: 400 });

      const { result, unmount } = renderHook(() => useMajorSectionId());

      triggerRAF();
      const valueBeforeUnmount = result.current;

      unmount();

      // Try to trigger events after unmount
      act(() => {
        eventListeners.get("scroll")!.forEach((listener) => listener());
      });

      expect(result.current).toBe(valueBeforeUnmount);
    });
  });

  describe("performance", () => {
    it("should handle rapid scroll events efficiently", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });

      renderHook(() => useMajorSectionId());

      triggerRAF();

      const rafSpy = vi.spyOn(window, "requestAnimationFrame");

      // Simulate 10 rapid scroll events
      for (let i = 0; i < 10; i++) {
        act(() => {
          eventListeners.get("scroll")!.forEach((listener) => listener());
        });
      }

      // Should only schedule one RAF due to throttling
      expect(rafSpy).toHaveBeenCalledTimes(1);
    });

    it("should handle many sections efficiently", () => {
      // Create 20 sections
      for (let i = 0; i < 20; i++) {
        createMockElement(`section-${i}`, {
          top: i * 500,
          bottom: (i + 1) * 500,
          height: 500,
        });
      }

      const { result } = renderHook(() => useMajorSectionId());

      triggerRAF();

      // Should complete without errors
      expect(result.current).toBe("Experience");
    });
  });

  describe("state consistency", () => {
    it("should maintain consistent state across re-renders", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });

      const { result, rerender } = renderHook(() => useMajorSectionId());

      triggerRAF();
      const firstValue = result.current;

      rerender();

      expect(result.current).toBe(firstValue);
    });

    it("should update state correctly through multiple scroll cycles", () => {
      createMockElement("Experience", { top: 0, bottom: 400, height: 400 });
      createMockElement("Project", { top: 400, bottom: 800, height: 400 });
      createMockElement("Activity", { top: 800, bottom: 1200, height: 400 });

      const { result } = renderHook(() => useMajorSectionId());

      const sections = ["Experience", "Project", "Activity"];
      
      for (let i = 0; i < sections.length; i++) {
        // Update mock positions to simulate scrolling
        mockElements.get("Experience")!.getBoundingClientRect = vi
          .fn()
          .mockReturnValue({
            top: -i * 400,
            bottom: 400 - i * 400,
            height: 400,
            left: 0,
            right: 0,
            width: 0,
            x: 0,
            y: 0,
            toJSON: () => ({}),
          } as DOMRect);

        mockElements.get("Project")!.getBoundingClientRect = vi
          .fn()
          .mockReturnValue({
            top: 400 - i * 400,
            bottom: 800 - i * 400,
            height: 400,
            left: 0,
            right: 0,
            width: 0,
            x: 0,
            y: 0,
            toJSON: () => ({}),
          } as DOMRect);

        mockElements.get("Activity")!.getBoundingClientRect = vi
          .fn()
          .mockReturnValue({
            top: 800 - i * 400,
            bottom: 1200 - i * 400,
            height: 400,
            left: 0,
            right: 0,
            width: 0,
            x: 0,
            y: 0,
            toJSON: () => ({}),
          } as DOMRect);

        act(() => {
          eventListeners.get("scroll")!.forEach((listener) => listener());
        });

        triggerRAF();
      }

      expect(result.current).toBe("Activity");
    });
  });
});