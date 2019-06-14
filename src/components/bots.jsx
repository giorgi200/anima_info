import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BotsGallery extends Component {
    state = {
        bots: [
            {
                id: 1,
                name: 'Cyber<br/>გალა',
                img: 'http://cybergala.me/images/gala.jpg',
                link: "http://cybergala.me/chatbot/Index/1/%E1%83%92%E1%83%90%E1%83%9A%E1%83%90%E1%83%99%E1%83%A2%E1%83%98%E1%83%9D%E1%83%9C-%E1%83%A2%E1%83%90%E1%83%91%E1%83%98%E1%83%AB%E1%83%94"
            },
            {
                id: 2,
                name: 'უნა<br/>ბოტი',
                img: 'http://cybergala.me/Images/bot/Una-636409351587482779-19429833_461996817488172_6895226366423077618_n.jpg',
                link: "http://unabot.cybergala.me/Home/Chat"
            }
        ],
        name: ''
    }
    componentDidMount(){
        document.title = "ბოტების გალერეა - Anima Chatbotics"
    }
    render() {
        return (
            <section id="bot-gallery" className="anima-container">
                <h1 className="anima-bots-heading">ბოტების<br />გალერეა</h1>
                <div className="anima-bots-grid">

                        <div  className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[0].name}}></h2>
                                <div className={this.state.bots[0].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[0].img !== '' ? this.state.bots[0].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[0].name}/>
                                </div>
                                <a href={this.state.bots[0].link} className="open-bot-link">გადასვლა</a>  
                            </article>
                        </div> 
                        
                        <div className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[1].name}}></h2>
                                <div className={this.state.bots[1].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[1].img !== '' ? this.state.bots[1].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[1].name}/>
                                </div>
                                <a href={this.state.bots[1].link} className="open-bot-link">გადასვლა</a>  
                            </article>
                        </div> 
                        
                </div>
            </section>
        );
    }
}

export default BotsGallery;
 