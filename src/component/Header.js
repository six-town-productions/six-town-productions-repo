// Import Links
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // Header JSX
        <header>
            <div className="hero">
                <div className="wrapper">
                    <h1><span>6</span>Town <br /> Productions</h1>
                    <div className="headingLinks">
                        <Link to="/about" title="About Us" className="button aboutButton">About</Link>
                        <Link to="/player" title="Listen to the Music" className="button">View Music</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;