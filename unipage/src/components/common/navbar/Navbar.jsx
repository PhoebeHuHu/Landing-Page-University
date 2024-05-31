import React from 'react'
import './Navbar.scss'
import logo from '../../../assets/logo.png'
const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar