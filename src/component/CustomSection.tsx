import React from "react";
import { styled } from "@mui/material/styles";
import { NextSeo } from "next-seo";
import useIntersectionObserver from "src/utils/customHook/useIntersectionObserver";
import Grow from "@mui/material/Grow";
import { Slide } from "@mui/material";

const StyledSection = styled("section")({
  maxWidth: "1200px",
  padding: "0rem 1rem",
  margin: "auto",
  marginBlock: "1rem",
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

export const CustomSection = ({ id, children, seo, direction = "up" }: SectionProp) => {
  const containerRef = React.useRef(null);
  const entry = useIntersectionObserver(containerRef, { threshold: 0.1 });

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
      <Slide in={entry?.isIntersecting} direction={direction} timeout={1000}>
        <div> {children}</div>
      </Slide>
      {/* <Grow
        in={entry?.isIntersecting}
        style={{ transformOrigin: "0 0 0" }}
        {...(entry?.isIntersecting ? { timeout: 500 } : {})}
      >
        <div> {children}</div>
      </Grow> */}
      <div style={{ minHeight: "10px" }}></div>
    </StyledSection>
  );
};
