import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./main/Header.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
