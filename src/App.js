import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";
import { useState } from "react";
import TopArrow from "./components/TopArrow";
import About from "./components/About";
import ProjectPage from "./components/ProjectPage";

const App = () => {
  const copyMail = () => {
    navigator.clipboard.writeText("oleosbo@gmail.com");
  };

  const [arrow, setTopArrow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > document.body.offsetHeight / 5) {
      setTopArrow(true);
    } else {
      setTopArrow(false);
    }
  });

  return (
    <HashRouter basename="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/projetos/:id" element={<ProjectPage />} />
      </Routes>
      <Contact copyMail={copyMail} />

      {arrow && <TopArrow />}
    </HashRouter>
  );
};

export default App;
