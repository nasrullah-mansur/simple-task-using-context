import { useContext, useEffect, useState } from "react";
import taskContext from "../context/taskContext/taskContext";

export default function Form() {
    const [text, setText] = useState("");
    const { onAdd, onEditingTask, onUpdate } = useContext(taskContext);

    useEffect(() => {
        if (onEditingTask) {
            setText(onEditingTask.task);
        }
    }, [onEditingTask]);

    // Create or Update task;
    const handleClick = () => {
        if (onEditingTask) {
            // Update;
            onUpdate({
                ...onEditingTask,
                task: text,
            });
        } else {
            // Create;
            onAdd(text);
        }

        setText("");
    };

    return (
        <form className="max-w-md mx-auto">
            <label
                htmlFor="add-task"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
                Search
            </label>
            <div className="relative">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    id="add-task"
                    className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add task here..."
                    required
                />
                <button
                    onClick={handleClick}
                    type="button"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {onEditingTask ? "Edit task" : "Add task"}
                </button>
            </div>
        </form>
    );
}
