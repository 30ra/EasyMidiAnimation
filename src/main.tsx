import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";

function App() {
    return (
        <div>
            <h1 className="title text-(--color-accent)">Hello World</h1>
            <p>こんにちは。世界。</p>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
