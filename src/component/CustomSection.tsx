import React from "react";
import { styled } from "@mui/material/styles";
import { NextSeo } from "next-seo";
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
  direction?: "up" | "down" | "right" | "left";
  children?: React.ReactNode;
  seo?: {
    title: string;
    description: string;
  };
}

export const CustomSection = ({ id, children, seo, direction = "down" }: SectionProp) => {
  const containerRef = React.useRef(null);
  const entry = useIntersectionObserver(containerRef, { threshold: 0.1, rootMargin: "100px" });

  return (
    <StyledSection id={id} ref={containerRef}>
      {seo && (
        <NextSeo
          title={seo.title}
          description={seo.description}
          openGraph={{
            type: "website",
            title: seo.title,
            description: seo.description,
          }}
        />
      )}
      <div
        style={{
          position: "relative",
          opacity: entry?.isIntersecting ? 1 : 0.2,
          transition: "opacity 0.6s ease-in-out, bottom 0.6s ease-in-out",
          transitionDelay: "0.1s",
          bottom: entry?.isIntersecting ? "0px" : "100px",
        }}
      >
        {children}
      </div>
      {/* <Slide in={entry?.isIntersecting} container={containerRef.current} direction={direction} timeout={700}>
      </Slide> */}
    </StyledSection>
  );
};
