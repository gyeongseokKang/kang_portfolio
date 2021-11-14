import { Typography } from "@mui/material";
import * as React from "react";
import Link from "@mui/material/Link";

interface TopBarSectionItemProp {
  to: string;
  onFocus?: boolean;
}

export default function TopBarSectionItem({ to, onFocus }: TopBarSectionItemProp) {
  const linkHref = `#${to}`;
  return (
    <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
      <Link href={linkHref} style={{ color: "#FFF" }}>
        {to}
      </Link>
    </Typography>
  );
}
