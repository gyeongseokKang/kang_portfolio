import React from "react";
import { styled, keyframes } from "@mui/material/styles";

const StyledDiv = styled("div")<{ statusColor: string }>(({ theme, statusColor }) => ({
  padding: "0.125rem 1rem",
  borderRadius: "7px",
  minWidth: "100px",
  color: "#FFF",
  backgroundImage: `linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  )`,
  backgroundSize: "1rem 1rem",
  animation: `${wavy} 3s linear infinite`,
  backgroundColor: statusColor,
}));

const wavy = keyframes`
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

interface DevelopmentStatusChipProp {
  status: "progress" | "finish" | "stop";
}

export const DevelopmentStatusChip = ({ status }: DevelopmentStatusChipProp) => {
  let statusColor = "#0dcaf0";
  let statusText = "개발중";
  switch (status) {
    case "progress": {
      statusColor = "#0D6EFD";
      statusText = "개발중";
      break;
    }
    case "finish": {
      statusColor = "#0dcaf0";
      statusText = "개발 완료";
      break;
    }
    case "stop": {
      statusColor = "#F0FFE3";
      statusText = "개발 중단";
      break;
    }
  }

  return <StyledDiv statusColor={statusColor}>{statusText}</StyledDiv>;
};
