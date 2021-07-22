import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ResponsivePlayer from "../ResponsivePlayer";
import './style.css';

function FeaturedCarousel() {

    return (
        <div>
            <h2 className="featuredPlays">Featured Plays of the Game!</h2>
            <Carousel interval={null} indicators={false}>
                <Carousel.Item>
                    <ResponsivePlayer 
                        url="https://vimeo.com/559811687"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ResponsivePlayer
                        url="https://vimeo.com/559851440"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <ResponsivePlayer
                        url="https://vimeo.com/559302602"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default FeaturedCarousel;