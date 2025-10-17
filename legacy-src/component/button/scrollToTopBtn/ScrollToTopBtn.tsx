import * as React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { useScrollPositionY } from "src/utils/customHook/useScrollPositionY";

const boxFade = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    ro
  }
  50% {
    transform: scale(0.5) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
`;

const StyledBtn = styled(IconButton)({
  position: "fixed",
  border: "2px solid",
  right: "25px",
  bottom: "25px",
  animation: `${boxFade} 0.25s linear`,
});

export default function ScrollToTopBtn() {
  const { scrollY, scrollYToTop } = useScrollPositionY();
  if (scrollY < 500) return null;
  return (
    <StyledBtn
      color="primary"
      aria-label="upload picture"
      onClick={() => {
        scrollYToTop();
      }}
    >
      <ArrowUpwardIcon />
    </StyledBtn>
  );
}
