import * as React from "react";

import { IconButton, Stack } from "@mui/material";

import Brightness2Icon from "@mui/icons-material/Brightness2";
import { ColorModeContext } from "../../store/ThemeStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import i18next from "src/locale/i18n";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({}) => ({
  "&.MuiIconButton-root": {
    border: "1px solid",
    borderRadius: "15px",
    color: "#ffffff",
  },
}));

export default function SettingIcons() {
  const colorMode = React.useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isLanguageMenuOpen = Boolean(anchorEl);

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    closeLanguageMenu();
  };

  const openLanguageMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeLanguageMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction={"row"} spacing={0.5}>
      <StyledIconButton
        aria-label="dark mode button"
        size="medium"
        edge="start"
        onClick={() => {
          colorMode.toggleColorMode();
        }}
      >
        {colorMode.currentColormode === "light" ? (
          <WbSunnyIcon />
        ) : (
          <Brightness2Icon />
        )}
      </StyledIconButton>
      <StyledIconButton
        aria-label="translate button"
        size="medium"
        edge="start"
        onClick={openLanguageMenu}
      >
        <TranslateIcon />
      </StyledIconButton>
      <StyledIconButton aria-label="github button" size="medium" edge="start">
        <Link href={"https://github.com/gyeongseokKang/kang_portfolio"}>
          <a
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              fontSize: "0.1rem",
            }}
            title={"github"}
          >
            <GitHubIcon />
          </a>
        </Link>
      </StyledIconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isLanguageMenuOpen}
        onClose={closeLanguageMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            changeLanguage("ko");
          }}
        >
          한국어
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage("en");
          }}
        >
          English
        </MenuItem>
      </Menu>
    </Stack>
  );
}
