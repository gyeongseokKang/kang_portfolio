import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DevelopmentStatusChip } from "./DevelopmentStatusChip";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.8rem",
  minWidth: "150px",
}));

interface ParticipationChipProp {
  date: string;
  status: "progress" | "finish" | "stop";
  position: string;
}

export const ParticipationChip = ({ date, status, position }: ParticipationChipProp) => {
  return (
    <Stack spacing={0.5} alignItems="center" direction="column">
      <DevelopmentStatusChip status={status} />
      <StyledTypography>{date}</StyledTypography>
      <StyledTypography>{position}</StyledTypography>
    </Stack>
  );
};
