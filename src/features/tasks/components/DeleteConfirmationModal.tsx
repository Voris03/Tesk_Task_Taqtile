import React from "react";
import { Button, Box, Typography } from "@mui/material";
import CustomModal from "../../../components/CustomModal";

interface DeleteConfirmationModalProps {
  isOpen: boolean; // Управляет состоянием модального окна
  onClose: () => void; // Функция закрытия модального окна
  onConfirm: () => void; // Функция подтверждения удаления
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "white",
          "@media (max-width: 330px)": {
            padding: 2, // Уменьшаем отступы для мобильных экранов
          },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            "@media (max-width: 330px)": {
              fontSize: "16px", // Уменьшаем размер шрифта для мобильных устройств
            },
          }}
        >
          Вы уверены, что хотите удалить эту задачу?
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            "@media (max-width: 330px)": {
              flexDirection: "column", // Вертикальная ориентация кнопок
              gap: 2,
            },
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={onConfirm}
            sx={{
              "@media (max-width: 330px)": {
                width: "100%", // Растягиваем кнопку на всю ширину
              },
            }}
          >
            Удалить
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={onClose}
            sx={{
              "@media (max-width: 330px)": {
                width: "100%", // Растягиваем кнопку на всю ширину
              },
            }}
          >
            Отмена
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
};

export default DeleteConfirmationModal;