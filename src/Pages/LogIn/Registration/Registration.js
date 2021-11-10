import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Registration = () => {
    return (
        <div className='container'>
            <h2>Registration Form</h2>
            <Form >
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder="User Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextConformPassword">
                    <Form.Label column sm="2">
                        Conform Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Conform Password" />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Registration;