import TableRow from "./TableRow";
import Modal from "./Modal";
import { createPortal } from "react-dom";
import { useContext } from "react";
import taskContext from "../context/taskContext/taskContext";
import popupContext from "../context/popupContext/popupContext";

export default function Table() {
    const { tasks, onDelete } = useContext(taskContext);
    const { onOpen, isOpen, onAccept, onClose } = useContext(popupContext);

    const handleDelete = (id) => {
        onOpen(id);
    };

    const handleAcceptDelete = () => {
        onDelete(onAccept());
        onClose();
    };

    return (
        <div className="max-w-md mt-4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Sr
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Task
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                {tasks.length === 0 && (
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <p className="py-3 text-center">
                                    No data found
                                </p>
                            </td>
                        </tr>
                    </tbody>
                )}
                <tbody>
                    {tasks.map((task, index) => (
                        <TableRow
                            onDelete={handleDelete}
                            key={task.id}
                            index={index}
                            task={task}
                        />
                    ))}
                </tbody>
            </table>

            {createPortal(
                isOpen && <Modal onDelete={handleAcceptDelete} />,
                document.getElementById("modal")
            )}
        </div>
    );
}
