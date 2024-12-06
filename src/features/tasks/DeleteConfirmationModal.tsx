import React from "react";
import Modal from "react-modal";
import { Button, Box, Typography } from "@mui/material";
import styled from "styled-components";

// Стилизованный контейнер модального окна
const ModalContent = styled(Box)`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 50px auto;
  text-align: center;
`;

const ButtonGroup = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          position: "relative",
          inset: "auto",
          border: "none",
          background: "transparent",
          overflow: "visible",
        },
      }}
    >
      <ModalContent>
        <Typography variant="h6" gutterBottom>
          Вы точно хотите удалить?
        </Typography>
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={onConfirm}
          >
            Удалить
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
          >
            Отмена
          </Button>
        </ButtonGroup>
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirmationModal;