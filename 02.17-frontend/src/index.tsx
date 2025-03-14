import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Novenyek from "./pages/Novenyek";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/novenyek" element={<Novenyek/>}/>
      <Route path="*" element={<h1>404 az oldal nem található</h1>}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
