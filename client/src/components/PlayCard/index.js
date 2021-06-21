import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from "react-player";
import './style.css'

function PlayCard(props) {
    return (
        <Card className="playCard p-2">
            <h3>{props.player} {props.playType} as {props.champ}</h3>
            <div className="playerWrapper">
                <ReactPlayer className='reactPlayer'
                    url={props.url}
                    playsinline={true}
                />
            </div>
        </Card>
    )
}

export default PlayCard;