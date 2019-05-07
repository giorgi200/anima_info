import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Header extends Component {
    state = {

    }
    
    render() {
        return (
            <header id="header" className="anima-container" >
                <Link to="/">
                <img src={ require("../../assets/svg/logo.svg") } alt="anima chatbotix" />
                </Link>
                <nav className="anima-nav">
                    <ul className="anima-menu-list">
                        <li className="anima-menu-link">
                            <Link to="/other" >ჩვენ შესახებ</Link>
                        </li>
                        <li className="anima-menu-link">
                            <Link to="/other" >ბოტების გალერეა</Link>
                        </li>
                        <li className="anima-menu-link">
                            <Link to="/#partners" >პარტნიორები</Link>
                        </li>
                        <li className="anima-menu-link">
                            <Link to="/other" >კონტაქტი</Link>
                        </li>
                        <li className="anima-menu-link anima-login-link">
                            <Link to="/other" >შესვლა</Link>
                        </li>
                        <li className="anima-menu-link anima-globe">
                            <Link to="/other" >
                                <i className="material-icons">language</i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
