import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.5rem",
  margin: "0.25rem",
  fontSize: "0.8rem",
  borderRadius: "5px",
  maxWidth: "100px",
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
  const router = useRouter();
  const openUrl = () => {
    router.push(url);
  };
  return <StyledTypography onClick={openUrl}>{title}</StyledTypography>;
};
