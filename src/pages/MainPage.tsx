import React from "react";
import { Box, Typography } from "@mui/material";

const MainPage: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Добро пожаловать на Task Platform
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        Управляйте своими задачами и легко связывайтесь с нами. Это удобная платформа для
        оптимизации вашего рабочего процесса.
      </Typography>
    </Box>
  );
};

export default MainPage;