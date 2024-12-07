import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  .MuiInputBase-input {
    padding: 10px;
  }
  .MuiInputLabel-root {
    font-weight: bold;
    color: #555;
  }
`;

const CustomTextField: React.FC<TextFieldProps> = (props) => {
  return <StyledTextField {...props} />;
};

export default CustomTextField;