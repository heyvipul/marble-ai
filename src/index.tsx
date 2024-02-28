import React from "react";
import { createRoot } from "react-dom/client";
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';

import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
    <CustomProvider theme="light">   
        <App />
    </CustomProvider> 
    </React.StrictMode>,
);
