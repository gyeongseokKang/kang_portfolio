import { styled } from "@mui/material/styles";
import React from "react";
import useIntersectionObserver from "src/utils/customHook/useIntersectionObserver";

const StyledSection = styled("section")({
  maxWidth: "1200px",
  padding: "0rem 1rem",
  margin: "auto",
  marginBlock: "3rem",
  position: "relative",
  overflowY: "hidden",
  "& > *": {
    fontFamily:
      "Noto Sans CJK KR,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
});

interface SectionProp {
  id: string;
  children?: React.ReactNode;
}

export const CustomSection = ({ id, children }: SectionProp) => {
  const containerRef = React.useRef(null);
  const entry = useIntersectionObserver(containerRef, { threshold: 0.1, rootMargin: "100px" });

  return (
    <StyledSection id={id} ref={containerRef}>
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
    </StyledSection>
  );
};
