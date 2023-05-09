import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./main/Header.js";
import Main from "./main/Main.js";
import Footer from "./main/Footer.js";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      {/* <BrowserRouter>
        <Header/>
        <Main/>
        <Routes>
          <Route path="/main" element={<Header />} />
        </Routes>
      </BrowserRouter>
      <Main/>
      <Footer/> */}
    </>
  );
     
}

export default App;
