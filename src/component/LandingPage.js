import Header from './Header';
import Player from './Player';
import About from './About';
import { Routes, Route } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <Header />
            <main>
                <Player />
                <About />
            </main>
        </>
    )
}

export default LandingPage;