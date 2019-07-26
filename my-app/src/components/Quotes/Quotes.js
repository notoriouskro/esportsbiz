import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './Quotes.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Quotes extends Component {
    render() {
        return (
            <Carousel showThumbs={false} width="100%" infiniteLoop>
                <div className="wrapper">
                    <img src="/images/playing1.jpg" className="gameplay" />
                    <p className="quote">"ESports Are Not A Real Sport"</p>
                </div>
                <div className="wrapper">
                <img src="/images/playing2.jpg" className="gameplay" />
                    <p className="quote">"Aren't these games just for kids?" </p>
                </div>
                <div className="wrapper">
                <img src="/images/playing3.jpg" className="gameplay" />
                    <p className="quote">"Are ESports just a fad?"</p>
                </div>
            </Carousel>
        );
    }
};


export default Quotes;
