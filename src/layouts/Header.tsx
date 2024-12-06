// src/layouts/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0 10px;

  &:hover {
    color: #ffcc00;
  }
`;

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          5S Platform
        </Typography>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/tasks">Задачи 5S</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;