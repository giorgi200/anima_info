import React, { Component } from "react";

class figures extends Component {
  // state = {
  //   isAuth: this.props.match.path === "/login" || this.props.match.path === "/login"  
  // }
  componentDidMount(){
    console.log(this.props)
  }
  
  render() {
    return (
        <div id="figures" className="no-bg">
          { 
            
            <img
            src={require("../../assets/svg/figure1.svg")}
            className="cube-figure"
            alt="anima chatbots"
            />
          }
            <img
            src={require("../../assets/img/figure2.png")}
            className="circle-figure-main"
            alt="anima chatbots"
            />
            <img
            src={require("../../assets/svg/figure3.svg")}
            className="triangle-figure"
            alt="anima chatbots"
            />
            
        </div>
    );
  }
}

export default figures;
