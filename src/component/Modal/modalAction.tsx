import React, { memo } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onClick?: () => void;
  title: string;
  body: string;
  btnTextCancel: string;
  btnTextYes: string;
}

const ModalAction = ({
  isVisible,
  onClose,
  title,
  body,
  btnTextCancel,
  btnTextYes,
  onClick,
}: Props) => {
  return (
    <div>
      <Dialog
        open={isVisible}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {btnTextCancel}
          </Button>
          <Button onClick={onClick} color="primary" autoFocus>
            {btnTextYes}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default memo(ModalAction);
