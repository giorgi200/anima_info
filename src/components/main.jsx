import React, { Component } from "react";

class Main extends Component {
    state = {
        collapseAbout: false,
        about: `ლორემ იპსუმ თაყვანისმცემლისთვის შემოივლიდი დამტკიცდა, მას გადაუჩურჩულა 
                მაიძულებენ ყურის. სანერვიულო ჩამებარებინა ქაღალდის ეკრანის, ხეებქვეშ, 
                თქარათქური ნობელის გგამიგია თვალების ნოტინფემის გრეხვას მალის მანას.`,
        tutorial:false,
        tutorialShow: ()=>{
            this.setState({ tutorial: true})
        },
        tutorialHide: ()=>{
            if(this.state.tutorial)  this.setState({ tutorial: false}); 
        }
    };

  render() {
    return (
      <div className="anima-container" id="main"  onClick={this.state.tutorialHide} >
       
        <article className="hero-article ">
          <h1>
            ანიმა <br /> ჩეტბოტიქსი
          </h1>
          <p>{this.state.about}</p>
          <button className="chat-anima-btn">დაელაპარაკე ანიმას</button>
        </article>
        <div className={!this.state.tutorial ? "anima-video-frame" : "anima-video-frame started"} >
            <div className={!this.state.tutorial ? "show-tutorial" : "show-tutorial show"}>
                <iframe src="https://www.youtube.com/embed/rpWrtXyEAN0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <h2 className="anima-tutorial-title">ტუტორიალი</h2>
            
          <svg
            onClick={this.state.tutorialShow}
            className={!this.state.tutorial ? "" : "hide-tutorial"}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1198.001"
            height="685.082"
            viewBox="0 0 1198.001 685.082"
          >
            <defs>
              <pattern
                id="pattern"
                width={1}
                height={1}
                viewBox="0 0 1187.24 667.148"
              >
                <image xlinkHref="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </pattern>
            </defs>
            <g
              id="Group_52"
              data-name="Group 52"
              transform="translate(-1068 -745.001)"
            >
              <g
                id="Group_49"
                data-name="Group 49"
                transform="translate(1068 745)"
              >
                <path
                  id="Subtraction_10"
                  data-name="Subtraction 10"
                  d="M1061.7,667.148H39.456V624.108h0l-23.313,0V600.792H39.456v23.314H62.77V600.792H39.456V577.477H16.141v23.315H0V84.29H84.29V43.041h43.042V0H1156.751V37.661h30.49l0,545.2h-84.29V625.9H1061.7v41.248Z"
                  transform="translate(10.761 17.934)"
                  fill="rgba(0,255,74,0.64)"
                  opacity="0.44"
                />
                <path
                  id="Subtraction_14"
                  data-name="Subtraction 14"
                  d="M1061.7,667.148H39.456V624.108h0l-23.313,0V600.792H39.456v23.314H62.77V600.792H39.456V577.477H16.141v23.315H0V84.29H84.29V43.041h43.042V0H1156.751V37.661h30.49l0,545.2h-84.29V625.9H1061.7v41.248Z"
                  transform="translate(1187.24 667.149) rotate(180)"
                  fill="#e0f"
                  opacity="0.44"
                />
                <path
                  id="Subtraction_6"
                  data-name="Subtraction 6"
                  d="M1061.7,667.148H39.456V624.108h0l-23.313,0V600.792H39.456v23.314H62.77V600.792H39.456V577.477H16.141v23.315H0V84.29H84.29V43.041h43.042V0H1156.751V37.661h30.49l0,545.2h-84.29V625.9H1061.7v41.248Z"
                  transform="translate(5.38 7.174)"
                  fill="url(#pattern)"
                />
              </g>
              <g
                id="Group_51"
                data-name="Group 51"
                transform="translate(1587.655 1008.198)"
                opacity="0.35"
              >
                <path
                  id="Subtraction_15"
                  data-name="Subtraction 15"
                  d="M79.344,158.687A79.364,79.364,0,0,1,48.46,6.235a79.364,79.364,0,0,1,61.768,146.216A78.848,78.848,0,0,1,79.344,158.687Zm0-145.213a65.87,65.87,0,1,0,65.87,65.87A65.945,65.945,0,0,0,79.344,13.473Z"
                  fill="#fff"
                />
                <path
                  id="Union_4"
                  data-name="Union 4"
                  d="M0,28.444H46.116L0,56.016Zm0,0V0L46.262,28.444Z"
                  transform="translate(61.202 51.771)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="anima-pricing">
            <div className="anima-pricing-banner">
                <h3 className="anima-pricing-title">პრო <br/> ბოტი</h3>
                <p className="anima-pricing-about">რედაქტირების საბაზო ფუნქციონალი</p>
                <p className="anima-pricing-about">10 000 კითხვა - პასუხი ერთი თვის განმავლობაში</p>
                <p className="anima-pricing-price">ფასი: 30$/თვე</p>
                <button className="anima-pricing-submit">რეგისტრაცია</button>
            </div>
            <div className="anima-pricing-banner pro">
                <h3 className="anima-pricing-title">პრემიუმ <br/> ბოტი</h3>
                <p className="anima-pricing-about">რედაქტირების საბაზო ფუნქციონალი</p>
                <p className="anima-pricing-about">10 000 კითხვა - პასუხი ერთი თვის განმავლობაში</p>
                <p className="anima-pricing-price">ფასი: 30$/თვე</p>
                <button className="anima-pricing-submit">COMING SOON</button>
            </div>
            <div className="anima-pricing-banner">
                <h3 className="anima-pricing-title">პრემიუმ <br/> ბოტი</h3>
                <p className="anima-pricing-about">რედაქტირების საბაზო ფუნქციონალი</p>
                <p className="anima-pricing-about">10 000 კითხვა - პასუხი ერთი თვის განმავლობაში</p>
                <p className="anima-pricing-price">ფასი: 30$/თვე</p>
                <button className="anima-pricing-submit">რეგისტრაცია</button>
            </div>
        </div>
        <div className="anima-partners">
            <h2 className="anima-partners-title">პარტნიორები</h2>
            <div className="anima-partners-list">
                <img src={require("../assets/img/partnior1.png")} alt="ministry of culture anima" />
                <img src={require("../assets/svg/partnior2.svg")} alt="heliae university anima" />
                <img src={require("../assets/svg/partnior3.svg")} alt="ltfr anima" />
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
