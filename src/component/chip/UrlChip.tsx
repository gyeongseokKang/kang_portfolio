import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.5rem",
  margin: "0.25rem",
  fontSize: "0.8rem",
  borderRadius: "5px",
  maxWidth: "100px",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.action.hover,
  border: `1px solid ${theme.palette.custom.hover}`,
  "&:hover": {
    backgroundColor: theme.palette.custom.hover,
  },
  cursor: "pointer",
}));

interface UrlChipProp {
  title: string;
  url: string;
}

export const UrlChip = ({ title, url }: UrlChipProp) => {
  return (
    <Link href={url}>
      <a target="_blank" style={{ textDecoration: "none" }}>
        <StyledTypography>{title}</StyledTypography>
      </a>
    </Link>
  );
};
