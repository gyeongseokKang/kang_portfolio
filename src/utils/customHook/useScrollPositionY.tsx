import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

export function useScrollPositionY() {
  const debounceDelay = 500;
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = useCallback(() => {
    if (typeof window === "undefined") return;
    setScrollY(window.pageYOffset);
  }, []);

  const scrollYToTop = useCallback(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", debounce(listener, debounceDelay));
    return () => window.removeEventListener("scroll", listener);
  });

  return {
    scrollY,
    scrollYToTop,
  };
}
