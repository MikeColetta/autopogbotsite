import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'
import firebase from '../../utils/firebase';

import './style.css';

function FeaturedCarousel() {
    const [featuredPlays, setFeaturedPlays] = useState([]);

    function getFeaturedPlays() {
        firebase.database().ref("sickplays").orderByChild("Time").limitToLast(25).on('value', snapshot => {
            let items = [];
            let featured = [];
            snapshot.forEach(snap => {
                items.push(snap.val());
                let randomItems = items.sort(() => 0.5 - Math.random());
                featured = randomItems.slice(0,5)
            })
            setFeaturedPlays(featured)
        }
        )
    }

    useEffect(() => {
        getFeaturedPlays();
    }, []);

    return (
        <div>
            <h2 className="featuredPlays">Featured Plays of the Game!</h2>
            <Carousel interval={null} indicators={false}>
                {featuredPlays.map((play) => (
                        <Carousel.Item key={play.id}>
                            <ReactPlayer url={play.VideoURL} style={{margin:"auto"}} width='75%'playsinline='true'/>
                        </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedCarousel;