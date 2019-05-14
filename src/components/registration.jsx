import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Registration extends Component {
    render() {
        return (
            <div id="login">
                <form className="auth">
                    <h1 className="auth-text">რეგისტრაცია</h1>
                    <div className="auth-form">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="სახელი"  />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons">mail_outline</i>
                                </span>
                            </div>
                        </div>
                        <div className="input-group ">
                            <input type="text" className="form-control" placeholder="გვარი"  />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">person</i>
                                </span>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="mail" className="form-control" placeholder="ელ.ფოსტა"  />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons">mail_outline</i>
                                </span>
                            </div>
                        </div>
                        {/* <div className="input-group ">
                            <input type="tel" className="form-control" placeholder="ტელეფონი"  />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">phone_iphone</i>
                                </span>
                            </div>
                        </div> */}
                        <div className="input-group ">
                            <input type="password" className="form-control" placeholder="პაროლი"  />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                            </div>
                        </div>
                        <div className="input-group ">
                            <input type="password" className="form-control" placeholder="გაიმეორე პაროლი"  />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="auth-submit" type="button">რეგისტრაცია</button>
                    <Link to="/login" className="auth-registration" >შესვლა</Link>
                </form>
            </div>
        );
    }
}

export default Registration;