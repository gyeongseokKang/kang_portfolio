"use client";

import React from "react";

type ViewportLazyProps = {
  render: () => React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  minHeight?: number;
};

export default function ViewportLazy({
  render,
  fallback = null,
  rootMargin = "200px 0px",
  minHeight,
}: ViewportLazyProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current || inView) return;

    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {inView ? render() : fallback}
    </div>
  );
}
