import React, { Component } from 'react';
import { Modal, Button, Form, Spinner, Col } from 'react-bootstrap';
import S3 from 'aws-s3';
let amazonS3Key = require('./AmazonKey.js')


class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinnerOnImg2D: false,
            spinnerOntexture_url: false,
            spinnerOnmtl_url: false,
            spinnerOnobj_url: false,
            itemName: false,
            img_2D_url: false,
            texture_url: false,
            mtl_url: false,
            obj_url: false,
            category: false,
            itemDescription: false
        };
    }






    uploadToAmazonS3Img2D = (e) => {


        this.setState({
            spinnerOnImg2D: true
        })
        const config = {
            bucketName: 'armenu',
            dirName: `3dModels/${localStorage.currentRestaurantName}/${localStorage.currentRestaurantId}/${this.props.menuName}/${this.props.menuId}/${this.state.itemName}/img2D`,
            region: 'us-east-2',
            accessKeyId: `${amazonS3Key[0]}`,
            secretAccessKey: `${amazonS3Key[1]}`
        }

        const ReactS3Client = new S3(config);
        const newFileName = `${this.state.itemName}_img_2d`;


        ReactS3Client.uploadFile(e.target.files[0], newFileName)
            .then(data => this.setState({ img_2D_url: data.location }, this.setState({
                spinnerOnImg2D: false
            })
            ))
            .catch(err => console.error(err))



    }


    uploadToAmazonS3texture_url = (e) => {
        this.setState({
            spinnerOntexture_url: true
        })
        const config = {
            bucketName: 'armenu',
            dirName: `3dModels/${localStorage.currentRestaurantName}/${localStorage.currentRestaurantId}/${this.props.menuName}/${this.props.menuId}/${this.state.category}/${this.state.itemName}`,
            region: 'us-east-2',
            accessKeyId: `${amazonS3Key[0]}`,
            secretAccessKey: `${amazonS3Key[1]}`
        }

        const ReactS3Client = new S3(config);
        const newFileName = `texture`;

        ReactS3Client.uploadFile(e.target.files[0], newFileName)
            .then(data => this.setState({ texture_url: data.location }, this.setState({
                spinnerOntexture_url: false
            })
            ))
            .catch(err => console.error(err))
    }


    uploadToAmazonS3mtl_url = (e) => {
        this.setState({
            spinnerOnmtl_url: true
        })
        const config = {
            bucketName: 'armenu',
            dirName: `3dModels/${localStorage.currentRestaurantName}/${localStorage.currentRestaurantId}/${this.props.menuName}/${this.props.menuId}/${this.state.category}/${this.state.itemName}`,
            region: 'us-east-2',
            accessKeyId: `${amazonS3Key[0]}`,
            secretAccessKey: `${amazonS3Key[1]}`
        }

        const ReactS3Client = new S3(config);
        const newFileName = `materials.mtl`;

        ReactS3Client.uploadFile(e.target.files[0], newFileName)
            .then(data => this.setState({ mtl_url: data.location }, this.setState({
                spinnerOnmtl_url: false
            })
            ))
            .catch(err => console.error(err))

    }


    uploadToAmazonS3obj_url = (e) => {
        this.setState({
            spinnerOnobj_url: true
        })
        const config = {
            bucketName: 'armenu',
            dirName: `3dModels/${localStorage.currentRestaurantName}/${localStorage.currentRestaurantId}/${this.props.menuName}/${this.props.menuId}/${this.state.category}/${this.state.itemName}`,
            region: 'us-east-2',
            accessKeyId: `${amazonS3Key[0]}`,
            secretAccessKey: `${amazonS3Key[1]}`,
            ContentType: 'text/plain'
        }

        const ReactS3Client = new S3(config);
        const newFileName = `module.obj`;

        ReactS3Client.uploadFile(e.target.files[0], newFileName)
            .then(data => this.setState({ obj_url: data.location }, this.setState({
                spinnerOnobj_url: false
            })
            ))
            .catch(err => console.error(err))
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createItem = (e) => {
        this.props.onHide()
        e.preventDefault()
        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                itemName: this.state.itemName, 
                itemDescription: this.state.itemDescription, 
                texture_url: this.state.texture_url, 
                obj_url: this.state.obj_url, 
                mtl_url: this.state.mtl_url, 
                category: this.state.category, 
                img_2D_url: this.state.img_2D_url, 
                menu_id: this.props.menuId
            })
        })
            .then(res => res.json())
            .then(newMenu => {
                console.log(newMenu)
            }, this.props.history.history.push('/my-menus/items', this.props.menuId))

    }




    render() {

        console.log(this.props)
        console.log(this.state)


        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title >
                        Add A New Item
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='container'>
                        <Form onSubmit={(e) => this.createItem(e)}>
                            <Form.Group >
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter menu name" onChange={(e) => this.handleChange(e)} name="itemName" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control type="text" as="textarea" rows="3" placeholder="Enter item description" onChange={(e) => this.handleChange(e)} name="itemDescription" />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Select Category</Form.Label>
                                <Form.Control onChange={(e) => this.handleChange(e)} as="select" name="category">
                                    <option>Please select a category</option>
                                    <option>Starters</option>
                                    <option>Main Dishes</option>
                                    <option>Sides</option>
                                    <option>Desserts</option>
                                </Form.Control>
                            </Form.Group>

                            <div className='parent-create-item-input-file'>
                                <div>
                                    <Form.Label>Image 2D</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.uploadToAmazonS3Img2D}
                                            className='input-file-create-menu'
                                            name="img_2D_url"
                                        />
                                    </div>
                                    <div className="flex-container-signup">
                                        {this.state.spinnerOnImg2D ? (
                                            <div className="child-create-signup">
                                                <Spinner animation="border" role="status" variant="primary">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>
                                            </div>
                                        ) : (
                                                <>

                                                </>
                                            )}
                                    </div>
                                </div>
                                <div>
                                    <Form.Label>Texture-JPG</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.uploadToAmazonS3texture_url}
                                            className='input-file-create-menu'
                                            name="texture_url"
                                        />
                                    </div>
                                    <div className="flex-container-signup">
                                        {this.state.spinnerOntexture_url ? (
                                            <div className="child-create-signup">
                                                <Spinner animation="border" role="status" variant="primary">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>
                                            </div>
                                        ) : (
                                                <>

                                                </>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className='parent-create-item-input-file'>
                                <div>
                                    <Form.Label>Materials-MTL</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.uploadToAmazonS3mtl_url}
                                            className='input-file-create-menu'
                                            name="mtl_url"
                                        />
                                    </div>
                                    <div className="flex-container-signup">
                                        {this.state.spinnerOnmtl_url ? (
                                            <div className="child-create-signup">
                                                <Spinner animation="border" role="status" variant="primary">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>
                                            </div>
                                        ) : (
                                                <>

                                                </>
                                            )}
                                    </div>
                                </div>
                                <div>
                                    <Form.Label>Model-OBJ</Form.Label>
                                    <div>
                                        <input
                                            type="file"
                                            onChange={this.uploadToAmazonS3obj_url}
                                            className='input-file-create-menu'
                                            name="obj_url"
                                        />
                                    </div>
                                    <div className="flex-container-signup">
                                        {this.state.spinnerOnobj_url ? (
                                            <div className="child-create-signup">
                                                <Spinner animation="border" role="status" variant="primary">
                                                    <span className="sr-only">Loading...</span>
                                                </Spinner>
                                            </div>
                                        ) : (
                                                <>

                                                </>
                                            )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-container-create-menu">



                                {this.state.itemName &&
                                    this.state.img_2D_url &&
                                    this.state.texture_url &&
                                    this.state.mtl_url &&
                                    this.state.obj_url &&
                                    this.state.category &&
                                    this.state.itemDescription ? (
                                        <>
                                            <Button variant="primary" type="submit" className='child-create-menu' onClick={this.createItem}>
                                                Create New Item
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button variant="primary" type="submit" className='child-create-menu' disabled>
                                                Fill Out The Information To Create A New Item
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

export default CreateItem;