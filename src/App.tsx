import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { Overview } from "./pages/Overview/Overview";
import { Skills } from "./pages/Skills/Skills";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/overview" element={<Overview />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}
