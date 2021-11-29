import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface SectionTitleProp {
  title?: string;
  subTitle?: string;
}

const StyledTypography = styled(Typography)<{ textColor: string }>(({ theme, textColor }) => ({
  display: "inline",
  background: `linear-gradient(180deg, rgba(0,0,0,0) 50%, ${theme.palette.primary.light} 50%)`,
  paddingInline: "2px",
  fontWeight: "500" as any,
  letterSpacing: "-2px",
}));

const StyledSubTitle = styled(Typography)({
  paddingInlineStart: "0.5rem",
  fontWeight: "500" as any,
});

export const CustomSectionTitle = ({ title, subTitle }: SectionTitleProp) => {
  return (
    <>
      {title && (
        <StyledTypography variant="h4" gutterBottom textColor={"#FFFF59"}>
          {title}
        </StyledTypography>
      )}
      {subTitle && (
        <StyledSubTitle variant="subtitle2" gutterBottom>
          {subTitle}
        </StyledSubTitle>
      )}
    </>
  );
};
