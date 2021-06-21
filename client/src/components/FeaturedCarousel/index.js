import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from "react-player";
import './style.css';

function FeaturedCarousel() {

    return (
        <div>
            <h2 className="featuredPlays">Featured Plays of the Game!</h2>
            <Carousel className="FeaturedCarousel" interval={null} indicators={false}>
                <Carousel.Item className="featuredCarouselPlay">
                    <ReactPlayer 
                        style={{margin: "auto", height: "100%", width: "100%"}}
                        url="https://vimeo.com/559811687"
                        playsinline={true}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ReactPlayer 
                        style={{margin: "auto", width: "100%"}}
                        url="https://vimeo.com/559851440"
                        playsinline={true}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ReactPlayer 
                        style={{margin: "auto", width: "100%"}}
                        url="https://vimeo.com/559302602"
                        playsinline={true}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default FeaturedCarousel;