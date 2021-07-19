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
                <About className="mt-5"/>
            </Row>
            <Row className="mt-5">
                <Col className="col-12">
                    <RecentPlays />
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;