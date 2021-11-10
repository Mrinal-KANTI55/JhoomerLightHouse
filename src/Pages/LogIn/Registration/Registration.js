import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Registration = () => {
    const [userInfo,setUserInfo]=useState({});
    const RegisterNewUser=e=>{
        const field =e.target.name;
        const value = e.target.value;
        const getInfo ={...userInfo};
        getInfo[field]=value;
        console.log(getInfo);
        setUserInfo(getInfo);
    }
    return (
        <div className='container'>
            <h2>Registration Form</h2>
            <Form >
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={RegisterNewUser} name='User Name' placeholder="User Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={RegisterNewUser} name='email' placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={RegisterNewUser} name='password' type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Conform Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onBlur={RegisterNewUser} name='ConformPassword' type="password" placeholder="Conform Password" />
                    </Col>
                </Form.Group>
                <Button variant="outline-success">Success</Button>
            </Form>
        </div>
    );
};

export default Registration;