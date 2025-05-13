import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 text-center leading-snug">
        Программа привлечения <br /> мужчины уровня 💼❤️
      </h1>

      <div className="space-y-4 w-full max-w-xs">
        <a
          href="day1.html"
          className="block text-center text-white bg-red-600 hover:bg-red-700 transition rounded-2xl py-4 text-lg font-medium shadow-md"
        >
          День 1 — Осознанность
        </a>
        <a
          href="day2.html"
          className="block text-center text-white bg-red-600 hover:bg-red-700 transition rounded-2xl py-4 text-lg font-medium shadow-md"
        >
          День 2 — Сексуальность
        </a>
        <a
          href="day3.html"
          className="block text-center text-white bg-red-600 hover:bg-red-700 transition rounded-2xl py-4 text-lg font-medium shadow-md"
        >
          День 3 — Энергия Изобилия
        </a>
      </div>
    </div>
  );
}
