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

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "0.8rem",
}));

interface StackChipProp {
  stackList: string[];
}

export const StackChip = ({ stackList }: StackChipProp) => {
  return (
    <Stack spacing={0.5} alignItems="center" direction="row">
      {stackList.map((stack) => (
        <>
          <StyledStack spacing={0.5} alignItems="center" direction="row">
            <Image src={`/icons/${stack}.svg`} height={20} width={20} />
            <StyledTypography>{stack}</StyledTypography>
          </StyledStack>
        </>
      ))}
    </Stack>
  );
};
