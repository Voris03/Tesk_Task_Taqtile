import React from "react";
import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-transform: none;

  &.primary {
    background-color: #4caf50;
    color: white;
    &:hover {
      background-color: #45a049;
    }
  }

  &.secondary {
    background-color: #ff5722;
    color: white;
    &:hover {
      background-color: #e64a19;
    }
  }
`;

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary";
}

const CustomButton: React.FC<CustomButtonProps> = ({ variantType = "primary", ...props }) => {
  return <StyledButton className={variantType} {...props} />;
};

export default CustomButton;