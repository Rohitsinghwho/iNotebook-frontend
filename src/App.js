import React from "react";

import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
// imported react router dom
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    {/* using react router dom to navigate  */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
