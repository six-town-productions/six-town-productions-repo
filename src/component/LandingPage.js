import Header from './Header';
import Player from './Player';
import About from './About';

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