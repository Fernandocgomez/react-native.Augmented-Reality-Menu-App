import React, { Component } from 'react';
import { Container, Modal, Button, Row, Col, Form, } from 'react-bootstrap';

class CreateMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    console.log(this.props)
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Menu
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Menu Name</Form.Label>
                <Form.Control type="text" placeholder="Enter menu name" />
              </Form.Group>
              
              <Form.Label>Menu Image</Form.Label>
              <div>
              <input
                type="file"
                onChange={this.upload}
                className='input-file-create-menu'
              />
              </div>
              
              
              
              <div className="flex-container-create-menu">

              <Button variant="primary" type="submit" className='child-create-menu'>
                Create New Menu
               </Button>
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