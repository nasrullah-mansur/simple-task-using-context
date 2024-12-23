import { useState } from "react";
import taskContext from "./taskContext";

export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [onEditingTask, setOnEditingTask] = useState(null);

    // Create task;
    const handleAdd = (text) => {
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                task: text,
            },
        ]);
    };

    // Edit handler;
    const handleEdit = (id) => {
        const onEditingTask = tasks.find((task) => task.id === id);
        setOnEditingTask(onEditingTask);
    };

    // Update task;
    const handleUpdate = (updatedTask) => {
        setTasks(
            tasks.map((task) => {
                if (updatedTask.id === task.id) {
                    return updatedTask;
                }

                return task;
            })
        );

        setOnEditingTask(null);
    };

    // Delete task;
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id != id));
    };

    const initialState = {
        tasks: tasks,
        onAdd: handleAdd,
        onEdit: handleEdit,
        onEditingTask,
        onUpdate: handleUpdate,
        onDelete: handleDeleteTask,
    };

    return (
        <taskContext.Provider value={initialState}>
            {children}
        </taskContext.Provider>
    );
}
