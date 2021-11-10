import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const LogIn = () => {
    const [userInfo,setUserInfo]=useState({});
    const WellComeUser=e=>{
        const field =e.target.name;
        const value = e.target.value;
        const getInfo ={...userInfo};
        getInfo[field]=value;
        console.log(getInfo);
        setUserInfo(getInfo);
    }
    return (
        <div className='container'>
            <h2>Log in form</h2>
            <Form>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" lg='4'>
                        Email
                    </Form.Label>
                    <Col sm="10" lg='6'>
                        <Form.Control className='ps-3' name='email' onBlur={WellComeUser}    placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2" lg='4'>
                        Password
                    </Form.Label>
                    <Col sm="10" lg='6'>
                        <Form.Control type="password" name='password' onBlur={WellComeUser}  placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button variant="outline-success">Success</Button>

            </Form>
        </div>
    );
};

export default LogIn;