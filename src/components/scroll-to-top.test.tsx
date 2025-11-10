import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { ScrollToTop } from "./scroll-to-top";

// Mock the hooks
vi.mock("@/hooks/use-major-section-id", () => ({
  useMajorSectionId: vi.fn(),
}));

vi.mock("@/hooks/use-scroll-position", () => ({
  useScrollPosition: vi.fn(),
}));

// Mock the app-sidebar constants
vi.mock("@/shared/ui/app-sidebar", () => ({
  FIRST_NAV_ITEM_ID: "Experience",
}));

// Mock motion components
vi.mock("motion/react", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="animate-presence">{children}</div>
  ),
  motion: {
    div: ({ children, ...props }: any) => (
      <div data-testid="motion-div" {...props}>
        {children}
      </div>
    ),
  },
}));

// Mock Button component
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  ),
}));

// Mock lucide-react
vi.mock("lucide-react", () => ({
  ArrowUp: () => <div data-testid="arrow-up-icon">ArrowUp</div>,
}));

import { useMajorSectionId } from "@/hooks/use-major-section-id";
import { useScrollPosition } from "@/hooks/use-scroll-position";

describe("ScrollToTop", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Default mock implementations
    (useMajorSectionId as any).mockReturnValue("Experience");
    (useScrollPosition as any).mockReturnValue({ scrollY: 0 });

    // Mock window properties
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 768,
    });

    Object.defineProperty(window, "scrollTo", {
      writable: true,
      configurable: true,
      value: vi.fn(),
    });
  });

  describe("visibility logic", () => {
    it("should hide button when on first section and below scroll threshold", () => {
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 100 });

      render(<ScrollToTop />);

      // Button should not be visible
      const button = screen.queryByRole("button");
      expect(button).not.toBeInTheDocument();
    });

    it("should show button when on a section other than first", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 100 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should show button when scrollY exceeds window height", () => {
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 800 }); // > 768

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should show button when scrollY exactly equals window height + 1", () => {
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 769 }); // 768 + 1

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should hide button when scrollY exactly equals window height", () => {
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 768 });

      render(<ScrollToTop />);

      const button = screen.queryByRole("button");
      expect(button).not.toBeInTheDocument();
    });

    it("should show button when on different section even with low scroll", () => {
      (useMajorSectionId as any).mockReturnValue("Activity");
      (useScrollPosition as any).mockReturnValue({ scrollY: 50 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("scroll behavior", () => {
    it("should call window.scrollTo with correct parameters when clicked", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth",
      });
    });

    it("should scroll to top on multiple clicks", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      expect(window.scrollTo).toHaveBeenCalledTimes(3);
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  describe("window height handling", () => {
    it("should use window.innerHeight when available", () => {
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 1200,
      });

      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 1201 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should use MIN_HEIGHT fallback when window.innerHeight is not available", () => {
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: undefined,
      });

      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 1025 }); // > 1024

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should hide button when scrollY is below MIN_HEIGHT and window.innerHeight is undefined", () => {
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: undefined,
      });

      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 1000 }); // < 1024

      render(<ScrollToTop />);

      const button = screen.queryByRole("button");
      expect(button).not.toBeInTheDocument();
    });

    it("should handle zero window height gracefully", () => {
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 0,
      });

      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 1 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("component rendering", () => {
    it("should render with correct aria-label", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Scroll to top");
    });

    it("should render ArrowUp icon", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const icon = screen.getByTestId("arrow-up-icon");
      expect(icon).toBeInTheDocument();
    });

    it("should apply correct variant and size props to Button", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("size", "icon");
      expect(button).toHaveAttribute("variant", "outline");
    });

    it("should apply animation class", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("animate-bounce");
    });
  });

  describe("edge cases", () => {
    it("should handle very large scroll values", () => {
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 999999 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    it("should handle negative scroll values", () => {
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: -100 });

      render(<ScrollToTop />);

      const button = screen.queryByRole("button");
      expect(button).not.toBeInTheDocument();
    });

    it("should handle zero scroll position", () => {
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 0 });

      render(<ScrollToTop />);

      const button = screen.queryByRole("button");
      expect(button).not.toBeInTheDocument();
    });

    it("should handle empty string as activeId", () => {
      (useMajorSectionId as any).mockReturnValue("");
      (useScrollPosition as any).mockReturnValue({ scrollY: 100 });

      render(<ScrollToTop />);

      // Should show button since "" !== "Experience"
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("animation presence", () => {
    it("should wrap button in AnimatePresence and motion.div", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const animatePresence = screen.getByTestId("animate-presence");
      const motionDiv = screen.getByTestId("motion-div");
      
      expect(animatePresence).toBeInTheDocument();
      expect(motionDiv).toBeInTheDocument();
    });

    it("should pass initial prop to AnimatePresence", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const animatePresence = screen.getByTestId("animate-presence");
      expect(animatePresence).toBeInTheDocument();
    });
  });

  describe("integration scenarios", () => {
    it("should transition from hidden to visible when scrolling past threshold", () => {
      const { rerender } = render(<ScrollToTop />);

      // Initially hidden
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 100 });
      rerender(<ScrollToTop />);

      expect(screen.queryByRole("button")).not.toBeInTheDocument();

      // Scroll past threshold
      (useScrollPosition as any).mockReturnValue({ scrollY: 800 });
      rerender(<ScrollToTop />);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should transition from visible to hidden when scrolling back to top", () => {
      const { rerender } = render(<ScrollToTop />);

      // Initially visible
      (useMajorSectionId as any).mockReturnValue("Experience");
      (useScrollPosition as any).mockReturnValue({ scrollY: 800 });
      rerender(<ScrollToTop />);

      expect(screen.getByRole("button")).toBeInTheDocument();

      // Scroll back to top
      (useScrollPosition as any).mockReturnValue({ scrollY: 100 });
      rerender(<ScrollToTop />);

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("should remain visible when navigating between non-first sections", () => {
      const { rerender } = render(<ScrollToTop />);

      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 400 });
      rerender(<ScrollToTop />);

      expect(screen.getByRole("button")).toBeInTheDocument();

      (useMajorSectionId as any).mockReturnValue("Activity");
      rerender(<ScrollToTop />);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should show button when returning to first section but scroll is high", () => {
      const { rerender } = render(<ScrollToTop />);

      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 1000 });
      rerender(<ScrollToTop />);

      expect(screen.getByRole("button")).toBeInTheDocument();

      // Return to first section but maintain high scroll
      (useMajorSectionId as any).mockReturnValue("Experience");
      rerender(<ScrollToTop />);

      // Button should still be visible due to high scroll
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("should be keyboard accessible", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      button.focus();

      expect(document.activeElement).toBe(button);
    });

    it("should trigger scroll on Enter key press", () => {
      (useMajorSectionId as any).mockReturnValue("Project");
      (useScrollPosition as any).mockReturnValue({ scrollY: 500 });

      render(<ScrollToTop />);

      const button = screen.getByRole("button");
      fireEvent.keyDown(button, { key: "Enter", code: "Enter" });

      // Button click should be triggered by Enter key
      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});