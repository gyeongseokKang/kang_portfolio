import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const StyledTypography = styled(Typography)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //   },
  padding: "0.2rem",
  borderRadius: "5px",
  background: theme.palette.background.paper,
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
          <StyledTypography>
            <Stack spacing={0.5} alignItems="center" direction="row">
              <Image src={`/icons/${stack}.svg`} height={20} width={20} />
              {stack}
            </Stack>
          </StyledTypography>
        </>
      ))}
    </Stack>
  );
};
