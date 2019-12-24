import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (
            <>
                <h1 style={h1}>Welcome!</h1>
                <Container style={{ marginTop: '30px', backgroundColor: '#f8f8f8', padding: '50px', borderRadius: 6, width: '75%', marginBottom:'100px' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" style={{marginBottom: '30px'}}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        

                        <Button variant="primary" size="lg" block type="submit" style={{ width: '100%', backgroundColor: '#26afd1', borderColor: '#26afd1', fontSize: '22px' }}>
                            Login
                        </Button>
                    </Form>

                </Container>
            </>
        );
    }
}

export default LoginForm;


const h1 = {
    textAlign: 'center',
    marginTop: '15px'
};