// Import SCSS
import './App.scss';
// Import Links, Routes & Hooks
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Import Components
import Loading from './component/Loading';
import Nav from './component/Nav';
import Player from './component/Player';
import About from './component/About';
import Contact from './component/Contact';
import Footer from "./component/Footer";
import LandingPage from './component/LandingPage';
import Error from './component/Error';

function App() {
  const [timer, setTimer] = useState(2)

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  return (
    (timer > 0) 
      ? (
        <Loading />
      ): (
        <div className="App">
          {/* Add Nav component with props */}
          <Nav />

          {/* Create routes for all the components */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/player" element={<Player />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>

          {/* Add Footer component */}
          <Footer />
        </div>
      )
  );
}
export default App;
