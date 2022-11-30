import React, {useState} from "react";
import logo from "./images/logo.png"
import {FaBars, FaTimes} from "react-icons/fa";

import "./Navbar.css"
import "../index.css"

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className="header">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt='logo'></img>
                </a>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color: '#ffffff'}}/>) : (<FaBars size={30} style={{color: "#ffffff"}}/>)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;