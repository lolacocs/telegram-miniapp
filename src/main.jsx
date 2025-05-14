import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";        // Главный экран
import Day1 from "./Day1";      // День 1

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/day1" element={<Day1 />} />
        {/* можно добавить еще:
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
