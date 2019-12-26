import React, { Component } from 'react';
import { Container, Modal, Button, Row, Col, Form, } from 'react-bootstrap';

class CreateItem extends Component {
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
                        Add A New Item
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter menu name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control type="text" as="textarea" rows="3" placeholder="Enter item description" />
                            </Form.Group>

                            <div className='parent-create-item-input-file'>
                                <div>
                                    <Form.Label>Image 2D</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.upload}
                                            className='input-file-create-menu'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Form.Label>Texture-JPG</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.upload}
                                            className='input-file-create-menu'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='parent-create-item-input-file'>
                                <div>
                                    <Form.Label>Materials-MTL</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.upload}
                                            className='input-file-create-menu'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Form.Label>Model-OBJ</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.upload}
                                            className='input-file-create-menu'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-container-create-menu">

                                <Button variant="primary" type="submit" className='child-create-menu'>
                                    Add A New Item
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

export default CreateItem;