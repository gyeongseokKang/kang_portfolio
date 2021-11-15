import { Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-scroll";

interface TopBarSectionItemProp {
  to: string;
  onFocus?: boolean;
}

export default function TopBarSectionItem({ to, onFocus }: TopBarSectionItemProp) {
  return (
    <Typography
      variant="subtitle1"
      component="div"
      sx={{ flexGrow: 1 }}
      style={{ minWidth: "75px", textAlign: "center" }}
    >
      <div style={{ cursor: "pointer" }}>
        <Link to={to} spy={true} smooth={true} duration={500}>
          {to}
        </Link>
      </div>
    </Typography>
  );
}
