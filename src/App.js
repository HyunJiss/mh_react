import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./main/Header.js";
import Main from "./main/Main.js";
import Footer from "./main/Footer.js";

function App() {
  return (
    <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
     
}

export default App;
