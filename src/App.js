import React from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/noteState";
// imported react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
    <>
      {/* using react router dom to navigate  */}

      <NoteState>
        {" "}
        {/*This line is neccessary to use context in the whole codebase*/}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
