import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: "0.25rem",
  marginBlockEnd: "0.25rem",
  borderRadius: "7px",
}));

const UrlTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "400" as any,
  fontStyle: "italic",
  "& a": {
    fontColor: "#888",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const PeriodTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "400" as any,
}));

interface CompanyliProp {
  name: string;
  homepageUrl?: string;
  position: string;
  period: string;
}

export const Companyli = ({ name, homepageUrl, position, period }: CompanyliProp) => {
  return (
    <StyledStack alignItems="flex-start" justifyContent="space-between" direction={"column"} flexWrap={"wrap"}>
      <Typography variant={"h6"}>{name}</Typography>
      {homepageUrl && (
        <UrlTypography variant={"caption"}>
          <Link href={homepageUrl}>
            <a target="_blank">{homepageUrl}</a>
          </Link>
        </UrlTypography>
      )}
      <Typography variant={"subtitle2"}>{position}</Typography>
      <PeriodTypography variant={"subtitle2"}>{period}</PeriodTypography>
    </StyledStack>
  );
};
