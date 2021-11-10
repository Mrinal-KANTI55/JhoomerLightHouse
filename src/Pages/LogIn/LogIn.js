import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div className='container'>
            <h2>Log in form</h2>
            <Form >
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2" lg='4'>
                        Email
                    </Form.Label>
                    <Col sm="10" lg='6'>
                        <Form.Control className='ps-3'    placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2" lg='4'>
                        Password
                    </Form.Label>
                    <Col sm="10" lg='6'>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default LogIn;