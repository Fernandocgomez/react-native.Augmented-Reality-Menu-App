import React from 'react'
import { Container, Card, CardColumns, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MenusItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (
            <>
                <Container style={{ marginTop: '60px', marginBottom: '100px' }}>

                    <Jumbotron>
                        <h1 className="h1-menus-items">Hello, world!</h1>
                        <p className="p-menus-items">
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>

                        <div className='flex-container'>
                                    <a className='child-menu-item' style={btnMenu}>Create New Item</a>
                                    <a className='child-menu-item' style={btnMenu}>Starters</a>
                                    <a className='child-menu-item' style={btnMenu}>Main Dishes</a>
                                    <a className='child-menu-item' style={btnMenu}>Sides</a>
                                    <a className='child-menu-item' style={btnMenu}>Desserts</a>
                                    
                                </div>
                    </Jumbotron>
                    <CardColumns>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.washingtonpost.com/resizer/7-gVChh4xgpm5Ykzg9e8aA5RzRA=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y2ZKDBOKS45UFJANLPKL7PWOOU.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <div className='flex-container'>
                                    <Link className='child' style={btnMenu}>Edit</Link>
                                    <Link className='child' style={btnMenu}>Delete</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Container>

            </>
        );
    }
}

export default MenusItems;


const btnMenu = {
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#black',
    color: 'black',


};

const btnMenuAction = {
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#black',
    color: 'black',
};


