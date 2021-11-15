import React from "react";
import { styled } from "@mui/material/styles";
import { NextSeo } from "next-seo";

const StyledSection = styled("section")({
  maxWidth: "1200px",
  padding: "0rem 1rem",
  margin: "auto",
  marginBlock: "1rem",
  position: "relative",
  "& > *": {
    fontFamily:
      "Noto Sans CJK KR,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif !important",
  },
});

interface SectionProp {
  className?: string;
  children?: React.ReactNode;
  seo?: {
    title: string;
    description: string;
  };
}

export const CustomSection = ({ children, className, seo }: SectionProp) => {
  return (
    <StyledSection className={className}>
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
      {children}
      <div style={{ minHeight: "10px" }}></div>
    </StyledSection>
  );
};
