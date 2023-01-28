// Import SCSS
import './App.scss';
// Import Links, Routes & Hooks
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// Import Components
import Nav from './component/Nav';
import Header from './component/Header';
import Player from './component/Player';
import About from './component/About';
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      {/* Add Nav component with props */}
      <Nav cartQuantity={cartQuantity} />

      <Header/>
      <Player/>
      <About/>

      {/* Create routes for all the components */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/player" element={<Player />} />
        {/* Pass down state function setCartQuantity to Cart */}
        <Route path="/about" element={<About setCartQuantity={setCartQuantity} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Add Footer component */}
      <Footer />
    </div>
  );
}

export default App;
