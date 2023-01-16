import React from 'react';
import { Container, Form, } from 'semantic-ui-react';

function ContactUs() {
    return (
        <Container as={"main"} className='main'>
            
            
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Name' placeholder='Name'/>
                    <Form.Input fluid label='Email' placeholder='Email' required/>

                </Form.Group>
                <Form.TextArea label='Comments' placeholder='Please enter your comments' required/>
                <Form.Checkbox label='I agree to the Terms and Conditions' required/>
                <Form.Button>Submit</Form.Button>
            </Form>
            
        </Container>
    );
}

export default ContactUs;