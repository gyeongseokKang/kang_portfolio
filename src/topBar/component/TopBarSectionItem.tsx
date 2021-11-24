import { Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-scroll";

interface TopBarSectionItemProp {
  to: string;
  top?: boolean;
}

export default function TopBarSectionItem({ to, top = true }: TopBarSectionItemProp) {
  return (
    <Typography
      variant="subtitle1"
      component="div"
      sx={{ flexGrow: 1 }}
      style={{ minWidth: "75px", textAlign: "center", padding: top ? "0.25rem " : "0.25rem 1rem" }}
    >
      <div style={{ cursor: "pointer" }}>
        <Link to={to} spy={true} smooth={true} duration={500} offset={-100}>
          {to}
        </Link>
      </div>
    </Typography>
  );
}
