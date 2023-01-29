// Import Logo image 
import logo from '../assets/logo.png'
// Import Links
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <ul>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <div className='logo'>
                        <img src={logo} alt="6 Town Productions logo" />
                    </div>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <p>Copyright © 2022</p>
            </div>
        </footer>
    )
}

export default Footer;