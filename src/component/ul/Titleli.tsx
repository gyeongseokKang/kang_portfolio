import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: "0.25rem",
  marginBlockEnd: "0.25rem",
  borderRadius: "7px",
  // border: `1px solid #12121a`,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "400" as any,
}));

const ColoredTypography = styled(Typography)(({ theme }) => ({
  display: "inline",
  background: `linear-gradient(180deg, rgba(0,0,0,0) 50%, ${theme.palette.primary.light} 50%)`,
  paddingInline: "5px 5px",
  fontWeight: "500" as any,
  minWidth: "100px",
}));

interface TitleliProp {
  title?: string;
  list?: string[];
  direction?: "left" | "right";
}

export const Titleli = ({ title, list = [], direction = "left" }: TitleliProp) => {
  return (
    <StyledStack alignItems="flex-start" justifyContent="space-between" direction={"column"} flexWrap={"wrap"}>
      {title && <ColoredTypography># {title}</ColoredTypography>}
      <Stack flex={1} direction={"column"} spacing={0.1} sx={{ p: 1.5 }}>
        {list.map((item) => (
          <Stack direction={"row"}>
            <CheckIcon fontSize={"small"} />
            <StyledTypography variant="subtitle2">{item}</StyledTypography>
          </Stack>
        ))}
      </Stack>
    </StyledStack>
  );
};
