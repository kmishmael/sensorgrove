import React from "react";

export interface ModalContextProps {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const ModalContext = React.createContext<ModalContextProps>({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { }
});