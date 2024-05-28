import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./contexts/Information";
import "./styles/main.css";
import App from "./App";

const rootElement = document.getElementById("root");
rootElement.classList.add("h-full");
const root = createRoot(rootElement);
root.render(
	<Provider>
		<App />
	</Provider>
);
