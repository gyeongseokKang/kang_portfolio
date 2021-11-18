import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface SectionTitleProp {
  title?: string;
  subTitle?: string;
}

const StyledTitle = styled(Typography)({
  fontWeight: "500" as any,
  marginBottom: "0.1rem",
  letterSpacing: "-2px",
});

const StyledSubTitle = styled(Typography)({
  paddingInlineStart: "0.5rem",
  fontWeight: "500" as any,
});

export const CustomSectionTitle = ({ title, subTitle }: SectionTitleProp) => {
  return (
    <>
      {title && (
        <StyledTitle variant="h4" gutterBottom>
          {title}
        </StyledTitle>
      )}
      {subTitle && (
        <StyledSubTitle variant="subtitle2" gutterBottom>
          {subTitle}
        </StyledSubTitle>
      )}
    </>
  );
};
