import { renderHook, act, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useScrollPosition } from "./use-scroll-position";

describe("useScrollPosition", () => {
  let scrollYValue = 0;
  let scrollEventListeners: Array<() => void> = [];

  beforeEach(() => {
    scrollYValue = 0;
    scrollEventListeners = [];

    // Mock window.scrollY with getter
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      get: () => scrollYValue,
    });

    // Mock addEventListener to capture scroll listeners
    vi.spyOn(window, "addEventListener").mockImplementation(
      (event: string, handler: any, options?: any) => {
        if (event === "scroll") {
          scrollEventListeners.push(handler);
        }
      }
    );

    // Mock removeEventListener
    vi.spyOn(window, "removeEventListener").mockImplementation(
      (event: string, handler: any) => {
        if (event === "scroll") {
          const index = scrollEventListeners.indexOf(handler);
          if (index > -1) {
            scrollEventListeners.splice(index, 1);
          }
        }
      }
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("initialization", () => {
    it("should return initial scroll position of 0", () => {
      const { result } = renderHook(() => useScrollPosition());

      expect(result.current.scrollY).toBe(0);
    });

    it("should return scrollX as undefined (not implemented)", () => {
      const { result } = renderHook(() => useScrollPosition());

      expect(result.current.scrollX).toBeUndefined();
    });

    it("should set initial scrollY from window.scrollY", () => {
      scrollYValue = 500;

      const { result } = renderHook(() => useScrollPosition());

      expect(result.current.scrollY).toBe(500);
    });
  });

  describe("scroll event handling", () => {
    it("should register scroll event listener on mount", () => {
      renderHook(() => useScrollPosition());

      expect(window.addEventListener).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function),
        { passive: true }
      );
    });

    it("should update scrollY when scroll event is triggered", async () => {
      const { result } = renderHook(() => useScrollPosition());

      expect(result.current.scrollY).toBe(0);

      // Simulate scroll
      act(() => {
        scrollYValue = 100;
        scrollEventListeners.forEach((listener) => listener());
      });

      await waitFor(() => {
        expect(result.current.scrollY).toBe(100);
      });
    });

    it("should use requestAnimationFrame for scroll updates", async () => {
      const rafSpy = vi.spyOn(window, "requestAnimationFrame");
      const { result } = renderHook(() => useScrollPosition());

      act(() => {
        scrollYValue = 200;
        scrollEventListeners.forEach((listener) => listener());
      });

      expect(rafSpy).toHaveBeenCalled();
      
      await waitFor(() => {
        expect(result.current.scrollY).toBe(200);
      });
    });

    it("should throttle scroll updates with requestAnimationFrame", async () => {
      let rafCallback: FrameRequestCallback | null = null;
      vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
        rafCallback = cb;
        return 1;
      });

      const { result } = renderHook(() => useScrollPosition());

      // Trigger multiple scroll events
      act(() => {
        scrollYValue = 100;
        scrollEventListeners.forEach((listener) => listener());
        scrollEventListeners.forEach((listener) => listener());
        scrollEventListeners.forEach((listener) => listener());
      });

      // Only one RAF should be scheduled
      expect(window.requestAnimationFrame).toHaveBeenCalledTimes(2); // 1 for initial + 1 for scroll

      // Execute the RAF callback
      if (rafCallback) {
        act(() => {
          rafCallback(0);
        });
      }

      await waitFor(() => {
        expect(result.current.scrollY).toBe(100);
      });
    });

    it("should handle multiple scroll position changes", async () => {
      const { result } = renderHook(() => useScrollPosition());

      const scrollPositions = [50, 150, 300, 500, 1000];

      for (const position of scrollPositions) {
        act(() => {
          scrollYValue = position;
          scrollEventListeners.forEach((listener) => listener());
        });

        await waitFor(() => {
          expect(result.current.scrollY).toBe(position);
        });
      }
    });

    it("should handle scroll to zero", async () => {
      scrollYValue = 1000;
      const { result } = renderHook(() => useScrollPosition());

      expect(result.current.scrollY).toBe(1000);

      act(() => {
        scrollYValue = 0;
        scrollEventListeners.forEach((listener) => listener());
      });

      await waitFor(() => {
        expect(result.current.scrollY).toBe(0);
      });
    });
  });

  describe("cleanup", () => {
    it("should remove scroll event listener on unmount", () => {
      const { unmount } = renderHook(() => useScrollPosition());

      unmount();

      expect(window.removeEventListener).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function)
      );
    });

    it("should not update state after unmount", async () => {
      const { result, unmount } = renderHook(() => useScrollPosition());

      const initialValue = result.current.scrollY;

      unmount();

      // Try to trigger scroll after unmount
      act(() => {
        scrollYValue = 500;
        scrollEventListeners.forEach((listener) => listener());
      });

      // Value should not change after unmount
      expect(result.current.scrollY).toBe(initialValue);
    });
  });

  describe("edge cases", () => {
    it("should handle negative scroll values", async () => {
      const { result } = renderHook(() => useScrollPosition());

      act(() => {
        scrollYValue = -50;
        scrollEventListeners.forEach((listener) => listener());
      });

      await waitFor(() => {
        expect(result.current.scrollY).toBe(-50);
      });
    });

    it("should handle very large scroll values", async () => {
      const { result } = renderHook(() => useScrollPosition());

      act(() => {
        scrollYValue = 999999;
        scrollEventListeners.forEach((listener) => listener());
      });

      await waitFor(() => {
        expect(result.current.scrollY).toBe(999999);
      });
    });

    it("should handle decimal scroll values", async () => {
      const { result } = renderHook(() => useScrollPosition());

      act(() => {
        scrollYValue = 123.456;
        scrollEventListeners.forEach((listener) => listener());
      });

      await waitFor(() => {
        expect(result.current.scrollY).toBe(123.456);
      });
    });

    it("should work with passive event listener option", () => {
      renderHook(() => useScrollPosition());

      expect(window.addEventListener).toHaveBeenCalledWith(
        "scroll",
        expect.any(Function),
        { passive: true }
      );
    });
  });

  describe("re-render behavior", () => {
    it("should maintain scroll position across re-renders", async () => {
      const { result, rerender } = renderHook(() => useScrollPosition());

      act(() => {
        scrollYValue = 250;
        scrollEventListeners.forEach((listener) => listener());
      });

      await waitFor(() => {
        expect(result.current.scrollY).toBe(250);
      });

      rerender();

      expect(result.current.scrollY).toBe(250);
    });

    it("should not add duplicate event listeners on re-render", () => {
      const { rerender } = renderHook(() => useScrollPosition());

      const initialCallCount = (window.addEventListener as any).mock.calls.length;

      rerender();
      rerender();
      rerender();

      // Should still have the same number of listeners
      expect((window.addEventListener as any).mock.calls.length).toBe(
        initialCallCount
      );
    });
  });
});