import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import SettingsIcon from "@mui/icons-material/Settings";
import { Drawer, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ColorModeContext } from "../../store/ThemeStore";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    display: "flex",
    justifyContent: "center",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&.MuiIconButton-root": {
    border: "1px solid",
    borderRadius: "15px",
    marginInlineEnd: "1.5rem",
  },
}));

export default function SettingIconDrawer() {
  const [state, setState] = React.useState(false);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const handleDarkMode = (event: React.MouseEvent<HTMLElement>, newDarkmode: string | null) => {
    if (newDarkmode === "light") {
      colorMode.setLightMode();
    } else if (newDarkmode === "dark") {
      colorMode.setDarkMode();
    } else {
      colorMode.setSystemMode();
    }
  };

  return (
    <div style={{}}>
      <StyledIconButton size="medium" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <SettingsIcon />
      </StyledIconButton>
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Settings
              </Typography>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                Dark mode
              </Typography>
            </ListItem>
            <ListItem>
              <StyledToggleButtonGroup
                size="small"
                value={theme.palette.mode}
                exclusive
                aria-label="text alignment"
                onChange={handleDarkMode}
              >
                <ToggleButton value="light" aria-label="left aligned">
                  <WbSunnyIcon /> Light
                </ToggleButton>
                <ToggleButton value="system" aria-label="centered">
                  <SettingsBrightnessIcon />
                  System
                </ToggleButton>
                <ToggleButton value="dark" aria-label="right aligned">
                  <Brightness2Icon /> Dark
                </ToggleButton>
              </StyledToggleButtonGroup>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
