import { createContext } from "react";

const initialState = {
    tasks: [],
    onAdd: (text) => {},
    onEdit: (id) => {},
    onEditingTask: null,
    onUpdate: (task) => {},
    onDelete: (id) => {},
};

const taskContext = createContext(initialState);

export default taskContext;
