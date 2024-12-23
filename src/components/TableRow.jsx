import { useContext, useState } from "react";
import taskContext from "../context/taskContext/taskContext";

export default function TableRow({ task, index, onDelete }) {
    const { onEdit } = useContext(taskContext);

    const handleClick = (e) => {
        e.preventDefault();
        onEdit(task.id);
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">#{index + 1}</td>
                <td className="px-6 py-4">{task.task}</td>
                <td className="px-6 py-4 text-left">
                    <a
                        href="#"
                        className="mr-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={handleClick}
                    >
                        Edit
                    </a>
                    <a
                        onClick={handleDelete}
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                        Delete
                    </a>
                </td>
            </tr>
        </>
    );
}
