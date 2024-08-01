import { createContext, useContext, useState } from "react";
import useErrorContext from "./errorContext";

const modalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

function ModalContextProvider({ children }) {
  const { errorNotExists, errorMessage } = useErrorContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    errorNotExists();
    errorMessage("");
  };
  return (
    <modalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </modalContext.Provider>
  );
}

function useModalContext() {
  return useContext(modalContext);
}

export default useModalContext;
export { modalContext, ModalContextProvider };
