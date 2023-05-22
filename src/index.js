import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ObjectDetector } from "./components/ObjectDetector";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/game/:objectToMatch" element={<ObjectDetector />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
