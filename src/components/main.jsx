import React, { Component } from 'react';

class Main extends Component {
    state = {
        collapseAbout: false,
        about: `ლორემ იპსუმ თაყვანისმცემლისთვის შემოივლიდი დამტკიცდა, მას გადაუჩურჩულა 
            მაიძულებენ ყურის. სანერვიულო ჩამებარებინა ქაღალდის ეკრანის, ხეებქვეშ, 
            თქარათქური ნობელის გგამიგია თვალების ნოტინფემის გრეხვას მალის მანას.`,
    }

    render() {
        return (
            <div className="anima-container" id="main">
                <img src={ require("../assets/svg/figure1.svg")} className="cube-figure" alt="anima chatbots"/>
                <img src={ require("../assets/img/figure2.png")} className="circle-figure" alt="anima chatbots"/>
                <img src={ require("../assets/svg/figure3.svg")} className="triangle-figure" alt="anima chatbots" />
                <article className="hero-article ">
                    <h1>ანიმა <br /> ჩეტბოტიქსი</h1>
                    <p>{this.state.about}</p>
                    <button className="chat-anima-btn">დაელაპარაკე ანიმას</button>
                </article>
            </div>
        );
    }
}

export default Main;
