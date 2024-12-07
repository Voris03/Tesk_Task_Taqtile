import styled from "styled-components";
import { Button } from "@mui/material";

export const PrimaryButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  &:hover {
    background-color: #45a049;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #ff5722;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  &:hover {
    background-color: #e64a19;
  }
`;