import React from 'react';
import { Card, Row } from 'react-bootstrap';
import logo from '../../assets/images/tyler-circle.png'

function About() {
    return (
        <Row className="inputRow">
            <h2 style={{ color: 'white' }}>About AutoPOGBot</h2>
            <Card className="pt-3 inputCard">
                <img src={logo} className="App-logo m-auto" alt="logo" />
                <br></br>
                <p>AutoPOGBot was created by Tyler Ostby to capture all of your Triple, Quadra, and Pentakills. Once you set AutoPOGBot to monitor your game,
                they'll tune in and push any of your multikills up to Vimeo.
                </p>
                <p>Login to start recording!</p>
            </Card>
        </Row>
    )
}

export default About;
