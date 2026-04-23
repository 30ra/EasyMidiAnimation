import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <body>
            <a className="text-red-500 inline-block w-full text-center font-semibold text-4xl">
                Hello World
            </a>
        </body>
    </StrictMode>,
);
