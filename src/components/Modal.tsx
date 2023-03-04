import Box from "@mui/material/Box";
import ModalBlock from "@mui/material/Modal";
import { FC } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  children: any,
  open: boolean,
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined
}

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {

  return (
    <ModalBlock
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </ModalBlock>
  );
}

export default Modal;
