import React from 'react'
import { Container, Card, CardColumns, Jumbotron, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MenusItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: [],
            startersItems: [],
            mainItems: [],
            sidesItems: [],
            dessertsItems: []
        };


    }

    componentDidMount() {
        fetch(`http://localhost:3000/menus/${this.props.history.location.state}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    allItems: data.items
                })
            })
    }


    renderItems = () => {
        return this.state.allItems.map(item => {
            return (
                <Card style={{ width: '18rem' }} classNAme="my-menus-child">
                    <Card.Img variant="top" src={item.img_2D_url} />
                    <Card.Body>
                        <Card.Title>{item.itemName}</Card.Title>
                        <Card.Text>
                            {item.itemDescription}
                        </Card.Text>
                        <div className='flex-container'>
                            <Link className='child' style={btnMenu}>Edit</Link>
                            <Link className='child' style={btnMenu} >Delete</Link>
                        </div>

                    </Card.Body>
                </Card>
            )
        })
    }




    render() {

        console.log(this.state)
        console.log(this.props)


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
                            <Link className='child-menu-item' style={btnMenu}>Create New Item</Link>
                            <Link className='child-menu-item' style={btnMenu}>Starters</Link>
                            <Link className='child-menu-item' style={btnMenu}>Main Dishes</Link>
                            <Link className='child-menu-item' style={btnMenu}>Sides</Link>
                            <Link className='child-menu-item' style={btnMenu}>Desserts</Link>

                        </div>
                    </Jumbotron>
                    <CardColumns>
                        {this.renderItems()}
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

