import { useContext } from "react";
import { ModalContentContainer, ModalHeader, ModalBody } from "./index.style";
import { ModalContext } from "../../context/ModalContext";

export const Modal = ({ children }) => {
  const { isOpen, toggle } = useContext(ModalContext);

  return (
    <>
      {isOpen && (
        <ModalContentContainer>
          <ModalHeader>
            <h2>Modal Header</h2>
            <button onClick={toggle}>Close</button>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContentContainer>
      )}
    </>
  );
};
