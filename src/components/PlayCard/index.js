import React from 'react';
import { Card } from 'react-bootstrap';
import ResponsivePlayer from "../ResponsivePlayer";
import './style.css'

function PlayCard(props) {
    return (
        <Card className="playCard p-2">
            <h3>{props.player} {props.playType} as {props.champ}</h3>
            <ResponsivePlayer
                url={props.url}
            />
        </Card>
    )
}

export default PlayCard;