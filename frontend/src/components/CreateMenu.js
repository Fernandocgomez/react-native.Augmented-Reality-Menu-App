import React, { Component } from 'react';
import {Modal, Button, Form, } from 'react-bootstrap';
import S3 from 'aws-s3';
let amazonS3Key = require('./AmazonKey.js')


class CreateMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null, 
      buttonNoClickable: true
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  

  uploadToAmazonS3 = (e) => {
    const config = {
      bucketName: 'armenu',
      dirName: `menus/${this.state.name}`,
      region: 'us-east-2',
      accessKeyId: `${amazonS3Key[0]}`,
      secretAccessKey: `${amazonS3Key[1]}`
    }

    const ReactS3Client = new S3(config);
    const newFileName = `${this.state.name}_menu_picture`;

    ReactS3Client.uploadFile(e.target.files[0], newFileName)
      .then(data => this.setState({img_url: data.location}, this.setState({
        buttonNoClickable: false
      })))
      .catch(err => console.error(err))
      
  }

  createMenu = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/menus', {
      method: 'POST', 
      headers: {
        'Authorization': `Bearer ${localStorage.token}`, 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name, 
        description: this.state.description,
        img_url: this.state.img_url, 
        restaurant_id: localStorage.currentRestaurantId
      })
    })
    .then(res => res.json())
    .then(console.log)



  }




  render() {
    console.log(this.state)

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Create Menu
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <Form onSubmit={(e) => this.createMenu(e)}>
              <Form.Group >
                <Form.Label>Menu Name</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} type="text" placeholder="Enter menu name" name="name"/>
              </Form.Group>

              <Form.Group >
                <Form.Label>Menu Description</Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} type="text" as="textarea" rows="3" placeholder="Enter item description" name="description"/>
              </Form.Group>

              <Form.Label>Menu Image</Form.Label>
              <div>
                <input
                  type="file"
                  onChange={this.uploadToAmazonS3}
                  className='input-file-create-menu'
                  name="img_url"
                />
              </div>



              <div className="flex-container-create-menu">
              {this.state.buttonNoClickable ? (
              <>
                <Button variant="primary" type="submit" className='child-create-menu' disabled>
                  Create New Menu
               </Button>
              </>
            ) : (
                <>
                <Button variant="primary" type="submit" className='child-create-menu' onClick={this.props.onHide}>
                  Create New Menu
               </Button>
                </>
              )}


                

                

              </div>

            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

    );
  }
}

export default CreateMenu;