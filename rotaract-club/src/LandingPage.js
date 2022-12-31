import React from 'react';
import { Form } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='Container'>
        <div className='LandingPage'> 
        <h1>Welcome to the Rotaract Club of SVIT </h1>
        <p>We are a group of dedicated students who are committed to making a difference in our community through service and leadership.</p>
        
        </div> {/* LandingPage */}        
        <div class='Form'>
            <Form>
            <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="formSubmit">
            <Form.Control type="submit" value="Submit" />
            </Form.Group>
        </Form>
        </div> {/* Form */} 
    </div>
  );
};

export default LandingPage;