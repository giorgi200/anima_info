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
            <img
            src={require("../../assets/img/figure2.png")}
            className="circle-figure-bots"
            alt="anima chatbots"
            />
            <img
            src={require("../../assets/svg/figure3.svg")}
            className="triangle-figure-other"
            alt="anima chatbots"
            />
            <img
            src={require("../../assets/img/figure4.png")}
            className="rounded-figure-bots"
            alt="anima chatbots"
            />
        </div>
    );
  }
}

export default figures;
