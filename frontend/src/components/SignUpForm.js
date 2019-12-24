import React from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap';
import S3 from 'aws-s3';
let UsaStates = require('./UsaStates.js');




const config = {
    bucketName: 'fernando3dmodels',
    dirName: 'logos',
    region: 'us-east-2',
    accessKeyId: 'AKIAJ6MQBTMXQG33YLKQ',
    secretAccessKey: '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',
}

const ReactS3Client = new S3(config);

const newFileName = 'test-file';






class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderStates = () => {
    return UsaStates.map(state => <option>{state}</option>)
  }

  

  upload = (e) => {
    ReactS3Client.uploadFile(e.target.files[0], newFileName)
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  
  

  render() {
      
    return (
        <>
        <h1 style={h1}>Register Your Business, Today!</h1>
        <Container style={{marginTop: '30px', backgroundColor: '#f8f8f8', padding: '50px', borderRadius: 6}}>
        <Form>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Restaurant Name</Form.Label>
            <Form.Control type="text" placeholder="Enter restaurant name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>
      
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
      
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
            <option>Choose state</option>
              {this.renderStates()}
            </Form.Control>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Restaurant Logo</Form.Label><br />
          <input 
          type="file"
          onChange={this.upload}
          />
        </Form.Group>
      
        <Button variant="primary" size="lg" block type="submit" style={{width: '100%', backgroundColor: '#26afd1', borderColor: '#26afd1', fontSize: '22px'}}>
          Register
        </Button>
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