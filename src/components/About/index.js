import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/tyler-circle.png'
import './style.css';

function About() {
    return (
        <Container className="aboutContainer">
            <Row className="inputRow">
                <Col>
                    <Row>
                        <h2 style={{ margin: 'auto', color: 'white' }}>About AutoPOGBot</h2>
                    </Row>
                    <Row>
                        <Card style={{ margin: 'auto'}} className="pt-3 inputCard">
                            <img src={logo} className="App-logo m-auto" alt="logo" />
                            <br></br>
                            <p>AutoPOGBot was created by Tyler Ostby to capture all of your Triple, Quadra, and Pentakills. Once you set AutoPOGBot to monitor your game,
                                they'll tune in and push any of your multikills up to Vimeo.
                            </p>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
