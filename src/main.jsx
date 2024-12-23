import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TaskProvider from "./context/taskContext/TaskProvider.jsx";
import PopupProvider from "./context/popupContext/PopupProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PopupProvider>
            <TaskProvider>
                <App />
            </TaskProvider>
        </PopupProvider>
    </StrictMode>
);
