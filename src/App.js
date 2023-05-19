import React from "react";
import './css/Common.css';
import Header from "./main/Header.js";
import Main from "./main/Main.js";
import HealthPopup from "./inc/HealthPopup";
import NoticePopup from "./inc/NoticePopup";

function App() {
  return (
    <>
    <NoticePopup />
    <HealthPopup />
    <Header/>
    <Main/>
    </>
  );
}

export default App;
