// src/HarshApp.js
import React from "react";
import { BrowserRouter as HarshRouter, Routes, Route } from "react-router-dom";

// Pages
import Harsh1 from "./pages/Harsh1"; // ShortenerPage (Dashboard maybe)
import Harsh2 from "./pages/Harsh2"; // StatsPage
import Harsh3 from "./pages/Harsh3"; // 👉 New Shorten URL Form Page

function HarshApp() {
  return (
    <HarshRouter>
      <Routes>
        <Route path="/" element={<Harsh1 />} />
        <Route path="/stats" element={<Harsh2 />} />
        <Route path="/shorten" element={<Harsh3 />} /> {/* NEW ROUTE */}
      </Routes>
    </HarshRouter>
  );
}

export default HarshApp;
