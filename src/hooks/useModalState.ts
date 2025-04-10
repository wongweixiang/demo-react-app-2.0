import { useState } from "react";

export const useModalState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpening = () => setIsOpen(true);
  const handleModalClosing = () => setIsOpen(false);

  return {
    isModalOpen: isOpen,
    handleModalOpening,
    handleModalClosing,
  };
};
