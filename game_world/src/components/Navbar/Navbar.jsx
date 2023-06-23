import React from 'react'
import Logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <img src={Logo} alt="world-game logo"
                    className='logo' />
            </div>
            <ul className='nav-links'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                <a href="#">Sobre</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar