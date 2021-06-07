import React from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from "react-player";
import './style.css'

function PlayCard() {
    return (
        <Card className="playCard p-2">
            <h5>Riot Sad Wizard gets a Triple Kill as Kayn against gooberinosenpai, MNMS2244, and ItsBranBran, assisted by Zoomie, Braddleborn, and DrPanda8</h5>
            <div className="playerWrapper">
                <ReactPlayer className='reactPlayer'
                    url="https://vimeo.com/559811687"
                    playsinline={true}
                />
            </div>
            <h5>Player: Riot Sad Wizard</h5>
            <p>Riot Sad Wizard gets a Triple Kill as Kayn against gooberinosenpai, MNMS2244, and ItsBranBran, assisted by Zoomie, Braddleborn, and DrPanda8</p>
        </Card>
    )
}

export default PlayCard;