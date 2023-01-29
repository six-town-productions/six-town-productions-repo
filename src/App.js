// Import SCSS
import './App.scss';
// Import Links, Routes & Hooks
import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// Import Components
import Nav from './component/Nav';
import Header from './component/Header';
import Player from './component/Player';
import About from './component/About';
import Contact from './component/Contact';
import Footer from "./component/Footer";
import LandingPage from './component/LandingPage';

function App() {
  return (
    <div className="App">
      {/* Add Nav component with props */}
      <Nav />

      {/* Create routes for all the components */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/player" element={<Player />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Add Footer component */}
      <Footer />
    </div>
  );
}

export default App;
