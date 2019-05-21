import React, { Component } from "react";
import Rellax from 'rellax';

class figures extends Component {
  componentDidMount(){
    this.rellax = new Rellax('.rellax');
  }
  componentWillUnmount(){
    this.rellax.destroy();
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
            className="circle-figure-main rellax"
            data-rellax-speed="1"
            // data-rellax-percentage="0.5"
            alt="anima chatbots"
            />
            <img
            src={require("../../assets/svg/figure3.svg")}
            className="triangle-figure rellax"
            data-rellax-speed="-2"
            alt="anima chatbots"
            />
            
        </div>
    );
  }
}

export default figures;
