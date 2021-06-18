import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from "react-player";
import './style.css'

function PlayCard(props) {
    return (
        <Card className="playCard p-2">
            <h5>{props.title}</h5>
            <div className="playerWrapper">
                <ReactPlayer className='reactPlayer'
                    url={props.url}
                    playsinline={true}
                />
            </div>
            <h5>Player: {props.player}</h5>
            <p>{props.description}</p>
        </Card>
    )
}

export default PlayCard;