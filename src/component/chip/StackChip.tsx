import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const StyledStack = styled(Stack)(({ theme }) => ({
  borderRadius: "5px",
  background: theme.palette.background.paper,
  padding: "0.2rem",
  fontSize: "0.8rem",
}));

const ColoredTypography = styled(Typography)(({ theme }) => ({
  display: "inline",
  background: `linear-gradient(180deg, rgba(0,0,0,0) 50%, ${theme.palette.primary.light} 50%)`,
  paddingInline: "5px 5px",
  fontWeight: "500" as any,
  minWidth: "100px",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "0.8rem",
}));

interface StackChipProp {
  title?: string;
  stackList: string[];
}

export const StackChip = ({ title, stackList }: StackChipProp) => {
  return (
    <>
      {title && <ColoredTypography># {title}</ColoredTypography>}
      <Stack spacing={0.5} alignItems="center" direction="row" flexWrap={"wrap"}>
        {stackList.map((stack, index) => (
          <StyledStack key={title + stack + index} spacing={0.5} alignItems="center" direction="row">
            <Image src={`/icons/${stack.toLowerCase()}.svg`} height={20} width={20} />
            <StyledTypography>{stack}</StyledTypography>
          </StyledStack>
        ))}
      </Stack>
    </>
  );
};
