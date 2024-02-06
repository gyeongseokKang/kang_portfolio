import { Card } from "@nextui-org/react";
import React from "react";
import useIntersectionObserver from "src/utils/customHook/useIntersectionObserver";

interface SectionProp {
  id: string;
  children?: React.ReactNode;
}

export const CustomSection = ({ id, children }: SectionProp) => {
  const containerRef = React.useRef(null);
  const entry = useIntersectionObserver(containerRef, {
    threshold: 0.1,
    rootMargin: "100px",
  });

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div id={id}></div>
      <Card
        ref={containerRef}
        className="container max-w-[1200px] p-8 mt-4 mb-12"
      >
        <div
          style={{
            position: "relative",
            opacity: entry?.isIntersecting ? 1 : 0.2,
            transition: "opacity 0.6s ease-in-out, top 0.6s ease-in-out",
            transitionDelay: "0.1s",
            top: entry?.isIntersecting ? "0px" : "50px",
          }}
        >
          {children}
        </div>
      </Card>
    </div>
  );
};
