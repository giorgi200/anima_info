import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class login extends Component {
    state = {

    }
    componentDidMount(){
        document.title = "კონტაქტი - Anima Chatbotics"
    }
    render() {
        return (
            <div id="login">
                <form className="auth">
                    <h1 className="auth-text">კონტაქტი</h1>
                    <div className="auth-form">
                        <div className="input-group">
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons">alternate_email</i>{/* 
                                 */}<a href="mailito:dillazeg@gmail.com">DillaZeg@gmail.com</a>
                                </span>
                            </div>
                        </div>
                        <div className="input-group ">
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">phone</i>{/* 
                                 */}<a href="tel:+995557970978">557 97 09 78</a> 
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default login;