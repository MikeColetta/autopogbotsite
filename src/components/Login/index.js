import React from 'react';
import { Card, Row, Form, Button } from 'react-bootstrap';
import './style.css'

function Login() {
    return (
        <div>
            <Row className="inputRow">
                <Card className="inputCard">
                    <h3 className="mt-2">Login</h3>
                    <Form className='m-3'>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Email'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                            ></Form.Control>
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Login
              </Button>
                    </Form>
                </Card>
            </Row>
            <Row className="inputRow">
                <Card className="inputCard">
                    <h3 className="mt-2">Create Account</h3>
                    <Form className='m-3'>
                        <Form.Group controlId='formBasicName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Name'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formSummonerName'>
                            <Form.Label>Summoner Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Summoner Name'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Email'
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Password'
                            ></Form.Control>
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Sign Up
              </Button>
                    </Form>
                </Card>
            </Row>
        </div>
    )
}

export default Login;