import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SettingIcons from "./component/SettingIcons";
import TopBarSectionItem from "./component/TopBarSectionItem";
import useWindowDimensions from "src/utils/customHook/useWindowDimensions";
import TopBarMenu from "./component/TopBarMenu";
import Container from "@mui/material/Container/Container";

export default function TopBar() {
  const { width } = useWindowDimensions();
  const [menuComponent, setMenuComponent] = useState(<HorizontalMenu />);

  useEffect(() => {
    if (width > 1100) {
      setMenuComponent(<HorizontalMenu />);
    } else {
      setMenuComponent(<VerticalMenu />);
    }
  }, [width]);

  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, bottom: "auto" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" component="span">
              KANG GYEONG SEOK
            </Typography>
            {menuComponent}
            <SettingIcons />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

const VerticalMenu = () => {
  return (
    <Stack justifyContent={"flex-end"} alignItems={"flex-end"} flex={1}>
      <TopBarMenu>
        <TopBarSectionItem to={"Intro"} top={false} />
        <TopBarSectionItem to={"Experience"} top={false} />
        <TopBarSectionItem to={"Project"} top={false} />
        <TopBarSectionItem to={"Skill"} top={false} />
        <TopBarSectionItem to={"Award"} top={false} />
        <TopBarSectionItem to={"Certificate"} top={false} />
        <TopBarSectionItem to={"Blog"} top={false} />
      </TopBarMenu>
    </Stack>
  );
};

const HorizontalMenu = () => {
  return (
    <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"flex-start"} flex={1}>
      <TopBarSectionItem to={"Intro"} />
      <TopBarSectionItem to={"Experience"} />
      <TopBarSectionItem to={"Project"} />
      <TopBarSectionItem to={"Skill"} />
      <TopBarSectionItem to={"Award"} />
      <TopBarSectionItem to={"Certificate"} />
      <TopBarSectionItem to={"Blog"} />
    </Stack>
  );
};
