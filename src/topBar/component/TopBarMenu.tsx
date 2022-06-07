import * as React from "react";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack/Stack";

interface TopBarMenuProp {
  children?: React.ReactNode;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&.MuiIconButton-root": {
    border: "1px solid",
    borderRadius: "15px",
  },
}));

export default function TopBarMenu({ children }: TopBarMenuProp) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Stack>
      <StyledIconButton
        aria-describedby={id}
        size="medium"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </StyledIconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack direction={"column"}>{children}</Stack>
      </Popover>
    </Stack>
  );
}
