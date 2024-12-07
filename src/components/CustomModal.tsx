import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const StyledModalContent = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: { border: "none", background: "transparent" },
      }}
    >
      <StyledModalContent>{children}</StyledModalContent>
    </Modal>
  );
};

export default CustomModal;