import React, { type ReactNode, useEffect, useState, startTransition } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  classesName?: string;
  onOverlayClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, open, classesName, onOverlayClick }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById("root-modal");
    console.log('Modal root element found:', !!root);
    startTransition(() => {
      setModalRoot(root);
    });
  }, []);

  console.log('Modal component - open:', open, 'modalRoot:', !!modalRoot);

  if (!modalRoot) {
    console.log('No modal root found, returning null');
    return null;
  }

  if (!open) {
    console.log('Modal not open, returning null');
    return null;
  }

  console.log('Rendering modal with createPortal');

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onOverlayClick) {
      onOverlayClick();
    }
  };

  return createPortal(
    <motion.div
      className="fixed inset-0 z-9999 flex items-center shadow-xl justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleOverlayClick}
    >
      <motion.div
        className={`w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-[1600px] text-white rounded-2xl shadow-2xl flex justify-center relative ${classesName}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

export default Modal;
