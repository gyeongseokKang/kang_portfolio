import React from "react";
import { styled, keyframes } from "@mui/material/styles";

const StyledDiv = styled("div")<{ statuscolor: string }>(({ theme, statuscolor }) => ({
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
  backgroundColor: statuscolor,
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
  let statuscolor = "#0dcaf0";
  let statusText = "개발중";
  switch (status) {
    case "progress": {
      statuscolor = "#0D6EFD";
      statusText = "개발중";
      break;
    }
    case "finish": {
      statuscolor = "#0dcaf0";
      statusText = "개발 완료";
      break;
    }
    case "stop": {
      statuscolor = "#cd2f2f";
      statusText = "개발 중단";
      break;
    }
  }

  return <StyledDiv statuscolor={statuscolor}>{statusText}</StyledDiv>;
};
