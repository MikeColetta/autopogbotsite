import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'
import firebase from '../../utils/firebase';

import './style.css';

function FeaturedCarousel() {
    const [featuredPlays, setFeaturedPlays] = useState([]);

    function getFeaturedPlays() {
        firebase.database().ref("sickplays").orderByChild("Time").limitToLast(3).on('value', snapshot => {
            let items = [];
            snapshot.forEach(snap => {
                items.push(snap.val());
            })
            setFeaturedPlays(items)
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
                            <ReactPlayer url={play.VideoURL} style={{margin:"auto"}}/>
                        </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default FeaturedCarousel;