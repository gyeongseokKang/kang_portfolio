import React from "react";
import { styled } from "@mui/material/styles";
import { NextSeo } from "next-seo";
import useIntersectionObserver from "src/utils/customHook/useIntersectionObserver";
import Grow from "@mui/material/Grow";

const StyledSection = styled("section")({
  maxWidth: "1200px",
  padding: "0rem 1rem",
  margin: "auto",
  marginBlock: "1rem",
  position: "relative",
  overflowY: "hidden",
  "& > *": {
    fontFamily:
      "Noto Sans CJK KR,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important",
  },
});

interface SectionProp {
  id: string;

  children?: React.ReactNode;
  seo?: {
    title: string;
    description: string;
  };
}

export const CustomSection = ({ id, children, seo }: SectionProp) => {
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
      <Grow
        in={entry?.isIntersecting}
        style={{ transformOrigin: "0 0 0" }}
        {...(entry?.isIntersecting ? { timeout: 500 } : {})}
      >
        <div> {children}</div>
      </Grow>
      <div style={{ minHeight: "10px" }}></div>
    </StyledSection>
  );
};
