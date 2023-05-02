import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./main/header.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/main" element={<Header />} />
          <Route path="/main1" element={<Header />} />
          <Route path="/main2" element={<Header />} />
          <Route path="/main3" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
     
}

export default App;
