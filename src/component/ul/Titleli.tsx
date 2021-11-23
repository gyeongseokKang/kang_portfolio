import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const StyledStack = styled(Stack)<{ bgColor: string }>(({ theme, bgColor }) => ({
  padding: "0.25rem",
  marginBlockEnd: "0.25rem",
  borderRadius: "15px",
  backgroundColor: bgColor,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "500" as any,
  padding: "1rem",
}));

interface TitleliProp {
  title: string;
  list: string[];
  direction?: "left" | "right";
}

export const Titleli = ({ title, list, direction = "left" }: TitleliProp) => {
  return (
    <StyledStack
      bgColor={direction === "left" ? "#FFE4C4" : "#f1ffe3"}
      alignItems="center"
      justifyContent="space-between"
      direction={direction === "left" ? "row" : "row-reverse"}
      flexWrap={"wrap"}
    >
      <StyledTypography>{title}</StyledTypography>
      <ul style={{ flex: "1" }}>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </StyledStack>
  );
};
