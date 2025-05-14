import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Day1 from "./Day1.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
const path = window.location.pathname;

if (path === "/day1.html") {
  root.render(<Day1 />);
} else {
  root.render(<App />);
}
