import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: '', 
            emailAddress: '',
            message: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {fullName, emailAddress, message} = this.state

        const form = await axios.post(`http://localhost:4000/api/form`, {
            fullName, 
            emailAddress, 
            message
        })
        console.log(form);
    }

    handleInputChange = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        //
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" onChange={this.handleInputChange} placeholder="Enter Full Name" name="fullName"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" onChange={this.handleInputChange} placeholder="Enter email" name="emailAddress"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={this.handleInputChange} placeholder="Enter a message" name="message"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

}

export default ContactForm;