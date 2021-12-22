import * as React from "react";
import { styled } from "@mui/material/styles";
import { IconButton, Stack } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Link from "next/link";
import { ColorModeContext } from "../../store/ThemeStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import TranslateIcon from "@mui/icons-material/Translate";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const StyledIconButton = styled(IconButton)(({}) => ({
  "&.MuiIconButton-root": {
    border: "1px solid",
    borderRadius: "15px",
    color: "#ffffff",
  },
}));

export default function SettingIcons() {
  const colorMode = React.useContext(ColorModeContext);

  const [i18nSnackBar, setI18nSnackBar] = React.useState(false);
  const openI18nSnackBar = () => {
    setI18nSnackBar(true);
  };
  const closeI18nSnackBar = (event?: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    setI18nSnackBar(false);
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
        {colorMode.currentColormode === "light" ? <WbSunnyIcon /> : <Brightness2Icon />}
      </StyledIconButton>
      <StyledIconButton aria-label="translate button" size="medium" edge="start" onClick={openI18nSnackBar}>
        <TranslateIcon />
      </StyledIconButton>
      <StyledIconButton aria-label="github button" size="medium" edge="start">
        <Link href={"https://github.com/gyeongseokKang/kang_portfolio"}>
          <a target="_blank" style={{ textDecoration: "none", color: "#ffffff", fontSize: "0.1rem" }} title={"github"}>
            <GitHubIcon />
          </a>
        </Link>
      </StyledIconButton>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={i18nSnackBar}
        autoHideDuration={5000}
        onClose={() => {
          closeI18nSnackBar();
        }}
        message="Not Supported yet"
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeI18nSnackBar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Stack>
  );
}
