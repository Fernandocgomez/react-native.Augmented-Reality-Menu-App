import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRestaurantLogin: null
        };
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then(res => res.json())
        .then(restaurantInfo => {
            localStorage.setItem("token", restaurantInfo.token)
            console.log(restaurantInfo.token)
            if(localStorage.token === restaurantInfo.token){
            localStorage.setItem("currentRestaurantName", restaurantInfo.restaurant.name)                   
            localStorage.setItem("currentRestaurantId", restaurantInfo.restaurant.id) 
            }
            if(localStorage.token === restaurantInfo.token){
                this.props.checkToken()
                this.props.history.history.push('/my-menus')
            }else{
                alert('Password or email is invalided')
            }
            
        })
    }




    render() {
        return (
            <>
                <h1 style={h1}>Welcome!</h1>
                <Container style={{ marginTop: '30px', backgroundColor: '#f8f8f8', padding: '50px', borderRadius: 6, width: '75%', marginBottom: '100px' }}>
                    <Form onSubmit={(e) => this.login(e)}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group style={{ marginBottom: '30px' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} name="password" type="password" placeholder="Password" />
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