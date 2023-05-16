import React from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/common.css';
import Header from "./main/Header.js";
import Main from "./main/Main.js";

function App() {
  return (
    <>
    <Header/>
    <Main/>
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
     
}

export default App;
