import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BotsGallery extends Component {
    state = {
        bots: [
            {
                id: 0,
                name: 'CYBER<br/>კალა',
                img: 'https://scontent.ftbs4-1.fna.fbcdn.net/v/t1.0-9/46043906_1474654035971361_2676531126746480640_n.jpg?_nc_cat=109&_nc_ht=scontent.ftbs4-1.fna&oh=9c448cf6c256d2d2f9933de81dde8c77&oe=5D5589F4'
            },
            {
                id: 1,
                name: 'CYBER<br/>გალა',
                img: 'http://cybergala.me/images/gala.jpg'
            },
            {
                id: 2,
                name: 'უნა<br/>ბოტი',
                img: 'http://cybergala.me/images/gala.jpg'
            },
            {
                id: 3,
                name: 'უნა ბოტი',
                img: 'http://cybergala.me/images/gala.jpg'
            }
        ],
        name: ''
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
                                <Link to="/0" className="open-bot-link">გადასვლა</Link>  
                            </article>
                        </div> 

                        <div className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[1].name}}></h2>
                                <div className={this.state.bots[1].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[1].img !== '' ? this.state.bots[1].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[1].name}/>
                                </div>
                                <Link to="/0" className="open-bot-link">გადასვლა</Link>  
                            </article>
                        </div> 

                        <div className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[2].name}}></h2>
                                <div className={this.state.bots[2].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[2].img !== '' ? this.state.bots[2].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[2].name}/>
                                </div>
                                <Link to="/0" className="open-bot-link">გადასვლა</Link>  
                            </article>
                        </div>
                        <div className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[3].name}}></h2>
                                <div className={this.state.bots[3].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[3].img !== '' ? this.state.bots[3].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[3].name}/>
                                </div>
                                <Link to="/0" className="open-bot-link">გადასვლა</Link>  
                            </article>
                        </div>
                        <div  className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[0].name}}></h2>
                                <div className={this.state.bots[0].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[0].img !== '' ? this.state.bots[0].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[0].name}/>
                                </div>  
                                <Link to="/0" className="open-bot-link">გადასვლა</Link>  
                            </article>
                        </div> 

                        <div className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[1].name}}></h2>
                                <div className={this.state.bots[2].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[2].img !== '' ? this.state.bots[2].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[2].name}/>
                                </div>
                                <Link to="/0" className="open-bot-link">გადასვლა</Link>  
                            </article>
                        </div> 

                        <div className="anima-bot" >
                            <article>
                                <h2 className="bots-title" dangerouslySetInnerHTML={{__html: this.state.bots[2].name}}></h2>
                                <div className={this.state.bots[2].img !== '' ? "bot-image-space " : "bot-image-space default-avatar"} >
                                    <img src={this.state.bots[2].img !== '' ? this.state.bots[2].img : "file:///C:/Users/Anima%20Junior/Desktop/anima-web/anima/build/static/media/bot.9a62858c.svg"} alt={ this.state.bots[2].name}/>
                                </div>
                                <Link to="/0" className="open-bot-link">გადასვლა</Link>  
                            </article>
                        </div>
                        
                </div>
            </section>
        );
    }
}

export default BotsGallery;
 