import React from "react";
import App from"./App"
// import Page from "./Pages/page1"
import Page2 from "./Pages/page2";
import { Routes, Route } from "react-router-dom";
import Page1 from "./Pages/page1";
import Page3 from "./Pages/page3";
import Page4 from "./Pages/page4";
import Page5 from "./Pages/page5";
export default function route() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </>
  );
}
