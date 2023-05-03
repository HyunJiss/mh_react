import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./main/Header.js";
import Main from "./main/Main.js";

function App() {
  return (
    <>
      <Main/>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Routes>
          <Route path="/main" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
     
}

export default App;
