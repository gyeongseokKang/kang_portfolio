import * as React from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Link from "next/link";
import { ColorModeContext } from "../../store/ThemeStore";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledIconButton = styled(IconButton)(({}) => ({
  "&.MuiIconButton-root": {
    border: "1px solid",
    borderRadius: "15px",
    marginInlineEnd: "1rem",
    color: "#ffffff",
  },
}));

export default function SettingIcons() {
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div>
      <StyledIconButton
        size="medium"
        edge="start"
        onClick={() => {
          colorMode.toggleColorMode();
        }}
      >
        {colorMode.currentColormode === "light" ? <WbSunnyIcon /> : <Brightness2Icon />}
      </StyledIconButton>
      <Link href={"https://github.com/gyeongseokKang/kang_portfolio"}>
        <a target="_blank" style={{ textDecoration: "none" }}>
          <StyledIconButton size="medium" edge="start">
            <GitHubIcon />
          </StyledIconButton>
        </a>
      </Link>
    </div>
  );
}
