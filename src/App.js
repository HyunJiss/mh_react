import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./main/Header.js";
import Main from "./main/Main.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Routes>
          <Route path="/main" element={<Header />} />
          <Route path="/main1" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
     
}

export default App;
