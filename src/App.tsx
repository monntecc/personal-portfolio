import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <>
      <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
      </div>
    </>
  );
}
