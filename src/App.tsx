import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import {Overview} from "./pages/Overview/Overview";

export default function App() {
  return (
    <>
      <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
          </Routes>
      </div>
    </>
  );
}
