import React, { Component } from "react";

class figures extends Component {
  render() {
    return (
        <div id="figures">
            <img
            src={require("../../assets/svg/figure1.svg")}
            className="cube-figure"
            alt="anima chatbots"
            />
            <img
            src={require("../../assets/img/figure2.png")}
            className="circle-figure"
            alt="anima chatbots"
            />
            <img
            src={require("../../assets/svg/figure3.svg")}
            className="triangle-figure"
            alt="anima chatbots"
            />
            <img
            src={require("../../assets/img/figure4.png")}
            className="rounded-figure"
            alt="anima chatbots"
            />
        </div>
    );
  }
}

export default figures;
