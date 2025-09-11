import React, { createContext, useContext, useState } from 'react';

const SuccessModalContext = createContext();

export function SuccessModalProvider({ children }) {
  const [modal, setModal] = useState({ visible: false, content: {} });

  return (
    <SuccessModalContext.Provider value={{ modal, setModal }}>
      {children}
    </SuccessModalContext.Provider>
  );
}

export function useSuccessModal() {
  const { modal, setModal } = useContext(SuccessModalContext);
  
  return {
    isVisible: modal.visible,
    modalContent: modal.content,
    showSuccessMessage: (content) => setModal({ visible: true, content }),
    hideSuccessMessage: () => setModal(prev => ({ ...prev, visible: false }))
  };
}
