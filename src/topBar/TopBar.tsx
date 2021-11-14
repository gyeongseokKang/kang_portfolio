import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SettingIconDrawer from "./component/SettingIconDrawer";
import TopBarSectionItem from "./component/TopBarSectionItem";
import useWindowDimensions from "src/utils/customHook/useWindowDimensions";
import TopBarMenu from "./component/TopBarMenu";

export default function TopBar() {
  const { width } = useWindowDimensions();

  return (
    <>
      <AppBar position="sticky" sx={{ top: 0, bottom: "auto" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KANG GYEONG SEOK
          </Typography>
          {width > 900 ? (
            <>
              <TopBarSectionItem to={"Intro"} />
              <TopBarSectionItem to={"Project"} />
              <TopBarSectionItem to={"Skill"} />
              <TopBarSectionItem to={"Award"} />
              <TopBarSectionItem to={"Certificate"} />
              <TopBarSectionItem to={"Blog"} />
              <TopBarSectionItem to={"Contact"} />
            </>
          ) : (
            <TopBarMenu>
              <TopBarSectionItem to={"Intro"} />
              <TopBarSectionItem to={"Project"} />
              <TopBarSectionItem to={"Skill"} />
              <TopBarSectionItem to={"Award"} />
              <TopBarSectionItem to={"Certificate"} />
              <TopBarSectionItem to={"Blog"} />
              <TopBarSectionItem to={"Contact"} />
            </TopBarMenu>
          )}
          <SettingIconDrawer />
        </Toolbar>
      </AppBar>
    </>
  );
}
