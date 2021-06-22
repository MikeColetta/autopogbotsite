import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Login from '../../components/Login';
import RecentPlays from '../../components/RecentPlays';
import About from '../../components/About';
import './style.css';

function Homepage() {
    return (
        <Container>
            <Row>
                <About />
            </Row>
            <Row className="mt-5">
                <Col className="col-8">
                    <RecentPlays />
                </Col>
                <Col className="col-4">

                    <Login />
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;