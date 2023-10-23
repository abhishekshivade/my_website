import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import About from "./pages/About";
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer/>
      <Routes>
        <Route path="#home" exact element={<Home />} />
        <Route path="#about" exact element={<About />} />
        <Route path="#projects" exact element={<Projects />} />
        <Route path="#contact" exact element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
