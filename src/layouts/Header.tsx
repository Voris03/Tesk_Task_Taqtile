import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#4caf50", // Новый цвет фона
        boxShadow: "none", // Убираем тень, чтобы фон выглядел чисто
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Логотип */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: "white", // Цвет текста остаётся белым
            "@media (max-width: 330px)": {
              fontSize: "14px", // Уменьшаем размер текста на мобильных устройствах
            },
          }}
        >
          Task Platform
        </Typography>

        {/* Навигация */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            "@media (max-width: 330px)": {
              gap: 1, // Уменьшаем расстояние между ссылками
            },
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              sx={{
                color: "white", // Цвет текста
                "@media (max-width: 330px)": {
                  fontSize: "12px", // Размер текста для ссылок
                },
              }}
            >
              Главная
            </Typography>
          </Link>
          <Link to="/tasks" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              sx={{
                color: "white", // Цвет текста
                "@media (max-width: 330px)": {
                  fontSize: "12px", // Размер текста для ссылок
                },
              }}
            >
              Задачи
            </Typography>
          </Link>
          <Link to="/contacts" style={{ textDecoration: "none" }}>
            <Typography
              variant="body1"
              sx={{
                color: "white", // Цвет текста
                "@media (max-width: 330px)": {
                  fontSize: "12px", // Размер текста для ссылок
                },
              }}
            >
              Контакты
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;