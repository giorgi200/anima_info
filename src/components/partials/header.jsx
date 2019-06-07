import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    state = {

    }
    
    render() {
        return (
            <header id="header" >
                <Link to="/">
                    <img src={ require("../../assets/svg/logo.svg") } alt="anima chatbotix" />
                </Link>
                <nav className="anima-nav">
                    <ul className="anima-menu-list">
                        <li className="anima-menu-link ">
                            <Link to="/contact" >კონტაქტი</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
