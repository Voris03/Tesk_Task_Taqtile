import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Минимальная высота экрана
      }}
    >
      <Header />
      <Box sx={{ flex: 1, padding: "20px" }}>{children}</Box> {/* Контент растягивается */}
      <Footer />
    </Box>
  );
};

export default Layout;