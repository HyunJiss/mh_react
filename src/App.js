import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import header from '.main/header.js'

function App() {
  return {
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/main" element=(<header />) />
        </Routes>
      </BrowserRouter>
    </>
  }
     
}

export default App;
