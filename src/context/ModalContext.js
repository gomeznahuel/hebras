import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <ModalContext.Provider value={{ isOpen, toggle }}>
          {children}
        </ModalContext.Provider>
      )}
    </>
  );
};

export default ModalProvider;
