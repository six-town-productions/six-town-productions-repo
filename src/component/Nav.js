// Import Logo image 
import logo from '../assets/logo.png'
// Import Links & Hooks
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = (props) => {
    // create a state watch toggle class
    const [active, setActive] = useState(false)

    // Create click function that updates toggle class state
    const toggleClass = () => {
        setActive(!active)
    }

    return (
        <>
            {/* Nav Bar */}
            <nav>
                <div className="wrapper">
                    <button onClick={toggleClass} className="navIcon">
                        <i className="icon fa-solid fa-bars">
                            <p className="sr-only">click here to open slide-out menu</p>
                        </i>
                    </button>
                    <div className="navBar">
                        <ul>
                            <li><Link to="/" className="navLink">Home</Link></li>
                            <li><Link to="/about" className="navLink">About</Link></li>
                            <li><Link to="/player" className="navLink">Music</Link></li>
                        </ul>
                        <div className='logo'>
                            <img src={logo} alt="6 Town Productions logo"/>
                        </div>
                        <Link to="/contact" title="Contact Us" className="contactButton">Contact</Link>
                    </div>
                </div>
            </nav>
            
            {/* Slide-Out Nav */}
            {/* create a ternary that toggles hide show class */}
            <div className={active ? "slideOutNav show" : "slideOutNav hide"} id="slideOutNavElement">
                <button onClick={toggleClass}className="navCloseIcon">
                    <i className="icon fa-solid fa-xmark">
                        <p className="sr-only">click here to open slide-out menu</p>
                    </i>
                </button>
                <nav>
                    <ul>
                        <li><Link to="/" className="navLink">Home</Link></li>
                        <li><Link to="/about" className="navLink">About</Link></li>
                        <li><Link to="/player" className="navLink">Music</Link></li>
                        <li><Link to="/contact" className="navLink">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav;