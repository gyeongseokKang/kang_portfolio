import React from "react";
import Typography from "@mui/material/Typography";

interface SectionTitleProp {
  title?: string;
  subTitle?: string;
}

export const CustomSectionTitle = ({ title, subTitle }: SectionTitleProp) => {
  return (
    <>
      {title && (
        <Typography variant="h4" gutterBottom component="div" style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography variant="h5" gutterBottom component="div" style={{ fontWeight: "bold" }}>
          {subTitle}
        </Typography>
      )}
    </>
  );
};
