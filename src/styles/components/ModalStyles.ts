import styled from "styled-components";

export const ModalContent = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  button {
    flex: 1;
    margin: 0 5px;
  }
`;
