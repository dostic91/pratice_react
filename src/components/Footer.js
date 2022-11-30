import React from "react";

import "./Footer.css";
import "../index.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <ul>
                    <li className="nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#test">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a href="#demo">Demo</a>
                    </li>
                </ul>
                <div className="bottom">
                    <span className="line"></span>
                    <p>2022 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;