import React, { Component } from 'react';
import { Link } from "react-router-dom";
import validator from 'validator';


class Registration extends Component {
    state = {
        form:{
            name:{
                isEmpty: false,
                maxLength: false, 
                ref:React.createRef(),
            },
            surname: {
                isEmpty: false,
                maxLength: false, 
                ref:React.createRef()
            },
            email: {
                isEmpty: false,
                isMail: false,
                maxLength: false, 
                isTaken: false,
                ref:React.createRef()
            },
            password:  {
                isEmpty: false,
                maxLength: false, 
                minLength: false, 
                ref:React.createRef()
            },
            rePassword: {
                isEmpty: false,
                isNotPassword: false,
                ref:React.createRef()
            }
        },
        notValid: {
            
        },
        validationForm: () => {
            let form = {
                name:{
                    isEmpty: false,
                    maxLength: false, 
                    ref:React.createRef(),
                },
                surname: {
                    isEmpty: false,
                    maxLength: false, 
                    ref:React.createRef()
                },
                email: {
                    isEmpty: false,
                    isMail: false,
                    maxLength: false, 
                    isTaken: false,
                    ref:React.createRef()
                },
                password:  {
                    isEmpty: false,
                    maxLength: false, 
                    minLength: false, 
                    ref:React.createRef()
                },
                rePassword: {
                    isEmpty: false,
                    isNotPassword: false,
                    ref:React.createRef()
                }
            }
            let valided = true;
            let mail = this.state.form.email.ref.current.value;
            let name = this.state.form.name.ref.current.value;
            let surname = this.state.form.surname.ref.current.value;
            let password = this.state.form.password.ref.current.value;
            let repassword = this.state.form.rePassword.ref.current.value;

            // ======= EMAIL =======
            // is email
            if(!validator.isEmail(mail)) {
                valided = false;
                form.email.isMail = true;
            };
            // is empty 
            if(validator.isEmpty(mail)){
                valided = false;
                form.email.isEmpty = true;
            }
            // is long 
            if(!validator.isLength(mail, { max: 200})){
                valided = false;
                form.email.maxLength = true;
            }

            // ======= NAME =======
            // is empty
            if(validator.isEmpty(name)) {
                valided = false;
                form.name.isEmpty = true;
            };
            // is long
            if(!validator.isLength(name, {min:0,max: 200})){
                valided = false;
                form.name.maxLength = true;
            };


            // ======= SURNAME =======
            // is empty
            if(validator.isEmpty(surname)) {
                valided = false;
                form.surname.isEmpty = true;
            };
            // is long
            if(!validator.isLength(surname, {min:0, max: 200})){
                valided = false;
                form.surname.maxLength = true;
            };

            // ======= PASSWORD =======
            // is password
            if(validator.isEmpty(password)) {
                valided = false;
                form.password.isEmpty = true;
            };
            // is long
            if(!validator.isLength(password, {min:0, max: 200})){
                valided = false;
                form.password.maxLength = true;
            };
            // is short
            if(!validator.isLength(password, {min:6, max:undefined})){
                valided = false;
                form.password.minLength = true;
            };

            
            // ======= RE-PASSWORD =======
            // is empty
            if(validator.isEmpty(repassword)) {
                valided = false;
                form.rePassword.isEmpty = true;
            };
            // is true
            if(password !== repassword){
                valided = false;
                form.rePassword.isNotPassword = true;
            };
            this.setState({form});
            if(valided){
                alert("is Valid")
            }
        }
    }
    

    componentDidMount(){
        document.title = "რეგისტრაცია - Anima Chatbotics"
    }
    render() {
        return (
            <div id="login">
                <form className="auth">
                    <h1 className="auth-text">რეგისტრაცია</h1>
                    <div className="auth-form">
                        <div className={ this.state.form.name.isEmpty || this.state.form.name.maxLength ? "input-group error-input" : "input-group "}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="სახელი"  
                                ref={this.state.form.name.ref} />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons">mail_outline</i>
                                </span>
                            </div>
                        </div>
                        
                        {/* ========== Errors ========== */}
                        { this.state.form.name.isEmpty ?   <p className="invalid-feedback custom-error">ეს ველი ცარიელია</p> : ""}
                        { this.state.form.name.maxLength ? <p className="invalid-feedback custom-error">ასოების რაოდენობა გადაჭარბებულია</p> : "" }
                        {/* ========== End Errors ========== */}

                        <div className={ this.state.form.surname.isEmpty || this.state.form.surname.maxLength ? "input-group error-input" : "input-group "}>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="გვარი" 
                                ref={this.state.form.surname.ref} />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">person</i>
                                </span>
                            </div>
                        </div>
                        
                        {/* ========== Errors ========== */}
                        {this.state.form.surname.isEmpty ? <p className="invalid-feedback custom-error">ეს ველი ცარიელია</p> : "" }
                        {this.state.form.surname.maxLength ? <p className="invalid-feedback custom-error">ასოების რაოდენობა გადაჭარბებულია</p> : "" }
                        {/* ========== End Errors ========== */}

                        <div className={ 
                                this.state.form.email.isEmpty || 
                                this.state.form.email.maxLength ||
                                this.state.form.email.isMail ||
                                this.state.form.email.isTaken ? 
                                "input-group error-input" : "input-group "
                            }
                        >
                            <input 
                                type="mail" 
                                className="form-control" 
                                placeholder="ელ.ფოსტა"  
                                ref={this.state.form.email.ref} />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons">mail_outline</i>
                                </span>
                            </div>
                            
                        </div>
                       
                        {/* ========== Errors ========== */}
                        { this.state.form.email.isMail && !this.state.form.email.isEmpty ? <p  className="invalid-feedback custom-error">ფორმატი არ ემთხვევა</p> : ""}
                        {this.state.form.email.isTaken ? <p className="invalid-feedback custom-error">ელ.ფოსტა დაკავებულია</p> : ""}
                        {this.state.form.email.maxLength ? <p className="invalid-feedback custom-error" >ასოების რაოდენობა გადაჭარბებულია</p> : ""}
                        {this.state.form.email.isEmpty ? <p className="invalid-feedback custom-error">ეს ველი ცარიელია</p> : "" }
                        {/* ========== Ends Errors ========== */}

                        <div className={ this.state.form.password.isEmpty || this.state.form.password.maxLength || this.state.form.password.minLength ? "input-group error-input" : "input-group "}>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="პაროლი"  
                                ref={this.state.form.password.ref} />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                            </div>
                        </div>
                        {/* ========== Errors ========== */}
                        {this.state.form.password.isEmpty ? <p className="invalid-feedback custom-error" > ეს ველი ცარიელია</p> : ""}
                        {this.state.form.password.minLength ? <p className="invalid-feedback custom-error" >გამოყენებულია 6 სიმბოლოზე ნაკლები</p> : ""}
                        {this.state.form.password.maxLength ? <p className="invalid-feedback custom-error" > გამოყენებულია 200 სიმბოლოზე მეტი</p> : ""}
                        {/* ========== End Errors ========== */}
                        <div className={ this.state.form.rePassword.isEmpty || this.state.form.rePassword.isNotPassword ? "input-group error-input" : "input-group "}>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="გაიმეორე პაროლი"  
                                ref={this.state.form.rePassword.ref} />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                            </div>
                        </div>
                        {/* ========== Errors ========== */}
                        {this.state.form.rePassword.isEmpty ? <p className="invalid-feedback custom-error">ეს ველი ცარიელია</p> : ""}
                        {this.state.form.rePassword.isNotPassword && !this.state.form.rePassword.isEmpty ? <p className="invalid-feedback custom-error">პაროლი არ ემთხვევა</p> : ""}
                        {/* ========== End Errors ========== */}
                    </div>
                    <button className="auth-submit" type="button" onClick={this.state.validationForm}>რეგისტრაცია</button>
                    <Link to="/login" className="auth-registration" >შესვლა</Link>
                </form>
            </div>
        );
    }
}

export default Registration;