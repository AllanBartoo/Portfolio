import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
=======
    <BrowserRouter basename="/Portfolio">
>>>>>>> 2c568e9 (deployment)
      <App />
    </BrowserRouter>
  </StrictMode>
);
