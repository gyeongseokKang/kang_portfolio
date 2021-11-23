import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Stack } from "@mui/material";
import HorizontalLine from "../hr/HorizontalLine";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ExtraInfoDialogProp {
  dialogTitle: string;
  children: React.ReactNode;
}

export default function ExtraInfoDialog({ dialogTitle, children }: ExtraInfoDialogProp) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="extra" onClick={handleClickOpen}>
        <DescriptionOutlinedIcon color="primary" />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Stack spacing={0.5} alignItems="center" direction="row" justifyContent="space-between">
            {dialogTitle}
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <HorizontalLine margin={"0px 0px 0px 0px"} color={"#AEAFBE"} width={"100%"} />
        <DialogContent>{open && children}</DialogContent>
        <HorizontalLine margin={"0px 0px 0px 0px"} color={"#AEAFBE"} width={"100%"} />
        <DialogActions>
          <Button onClick={handleClose}>ClOSE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
