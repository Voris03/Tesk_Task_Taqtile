import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const FooterWrapper = styled(Box)`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Typography variant="body2">
        © {new Date().getFullYear()} Task Platform. Все права защищены.
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
