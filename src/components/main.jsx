import React, { Component } from "react";

class Main extends Component {
  state = {
        collapseAbout: false,
        about: `Anima Chatbotics "Chatbotics" ციფრული ასისტენტების, ადამიანის დამხმარე მანქანების და ალგორითმების შექმნის ხელოვნებაა, "Anima" კი "სულს" ნიშნავს.
          ჩვენს პლატფორმაზე თქვენ შეგიძლიათ თავად შექმნათ ჩეთბოტები ან დაიქირავოთ უკვე შექმნილი ციფრული ასისტენტები, რომლებსაც გააჩნიათ საკუთარი ხასიათები, საურთიერთო ენა და დაუოკებელი სურვილი, რომ ადამიანებს დაეხმარონ.`,
        tutorial:false,
        tutorialShow: ()=>{
            this.setState({ tutorial: true})
        },
        tutorialHide: ()=>{
            if(this.state.tutorial)  this.setState({ tutorial: false}); 
        }
    };
  componentDidMount(){
      document.title = "Anima Chatbotics"
  }
  render() {
    return (
      <div id="main"  onClick={this.state.tutorialHide} >
        <article className="hero-article anima-container">
          <h1>
            ანიმა <br /> ჩეტბოტიქსი
          </h1>
          <p>{this.state.about}</p>
        </article>
        <div className="anima-partners anima-container" id="partners">
          <div className="for-center">
            <img src={require("../assets/img/partners-title.png")}  className="anima-partners-title" alt="anima chatbotics"/>
            <div className="anima-partners-list">
                <img src={require("../assets/img/partnior1.png")} alt="ministry of culture anima" />
                <img src={require("../assets/svg/partnior2.svg")} alt="heliae university anima" />
                <img src={require("../assets/svg/partnior3.svg")} alt="ltfr anima" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
