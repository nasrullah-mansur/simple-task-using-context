import { createContext } from "react";

const initialState = {
    isOpen: false,
    deletingId: null,
    onOpen: (id) => {},
    onClose: () => {},
    onAccept: () => {},
};

const popupContext = createContext(initialState);

export default popupContext;
