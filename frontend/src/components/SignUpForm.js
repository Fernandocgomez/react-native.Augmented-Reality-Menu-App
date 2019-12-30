import React from 'react'
import { Form, Button, Col, Container, Spinner } from 'react-bootstrap';
import S3 from 'aws-s3';
let UsaStates = require('./UsaStates.js');
let amazonS3Key = require('./AmazonKey.js')

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      buttonNoClickable: true,
      spinnerOn: false
    };
  }

  renderUsaStates = () => {
    return UsaStates.map(state => <option>{state}</option>)
  }

  uploadToAmazonS3 = (e) => {
    this.setState({
      spinnerOn: true
    })
    const config = {
      bucketName: 'armenu',
      dirName: `logos/${this.state.name}`,
      region: 'us-east-2',
      accessKeyId: `${amazonS3Key[0]}`,
      secretAccessKey: `${amazonS3Key[1]}`
    }

    const ReactS3Client = new S3(config);
    const newFileName = `${this.state.name}_logo`;

    ReactS3Client.uploadFile(e.target.files[0], newFileName)
      .then(data => this.setState({ logo_url: data.location }, this.setState({
        spinnerOn: false
      }),
        this.setState({
          buttonNoClickable: false
        })))
      .catch(err => console.error(err))

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signUp = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        address1: this.state.address1,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        logo_url: this.state.logo_url,
      })
    })
      .then(res => res.json())
      .then(console.log)
    this.props.history.history.push('/login')


  }

  render() {

    return (
      <>
        <h1 style={h1}>Register Your Business, Today!</h1>
        <Container style={{ marginTop: '30px', backgroundColor: '#f8f8f8', padding: '50px', borderRadius: 6 }}>
          <Form onSubmit={(e) => this.signUp(e)}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Restaurant Name</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} type="text" placeholder="Enter restaurant name" name="name" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} type="email" placeholder="Enter email" name="email" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} type="password" placeholder="Password" name="password" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={(e) => this.handleChange(e)} placeholder="1234 Main St" name="address1" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} name="city" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} as="select" name="state">
                  <option>Choose state</option>
                  {this.renderUsaStates()}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} name="zipCode" />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col}>
              <Form.Label>Restaurant Logo</Form.Label><br />
              <input
                type="file"
                onChange={this.uploadToAmazonS3}
                name="logo_url"
              />
            </Form.Group>

            <div className="flex-container-signup">
            {this.state.spinnerOn ? (
              <div className="child-create-signup">
                <Spinner animation="border" role="status" variant="info">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </div>
            ) : (
                <>

                </>
              )}
            </div>



            {this.state.buttonNoClickable ? (
              <>
                <Button variant="primary" size="lg" block type="submit" style={{ width: '100%', backgroundColor: '#26afd1', borderColor: '#26afd1', fontSize: '22px' }} disabled>
                  Register
            </Button>
              </>
            ) : (
                <>
                  <Button variant="primary" size="lg" block type="submit" style={{ width: '100%', backgroundColor: '#26afd1', borderColor: '#26afd1', fontSize: '22px' }}>
                    Register
            </Button>
                </>
              )}




          </Form>

        </Container>
      </>
    );
  }
}

export default SignUpForm;


const h1 = {
  textAlign: 'center',
  marginTop: '15px'
};