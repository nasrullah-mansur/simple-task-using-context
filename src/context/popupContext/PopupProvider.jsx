import { useState } from "react";
import popupContext from "./popupContext";

export default function PopupProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    // for opening popup modal;
    const handleOpen = (id) => {
        setIsOpen(true);
        setDeleteId(id);
    };

    const handleClose = () => {
        setIsOpen(false);
        setDeleteId(null);
    };

    const handleAccept = () => {
        return deleteId;
    };

    const initialState = {
        isOpen,
        deleteId,
        onOpen: handleOpen,
        onClose: handleClose,
        onAccept: handleAccept,
    };

    return (
        <popupContext.Provider value={initialState}>
            {children}
        </popupContext.Provider>
    );
}
