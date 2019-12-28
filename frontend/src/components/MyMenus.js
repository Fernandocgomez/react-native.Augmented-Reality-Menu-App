import React from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateItem from './CreateItem';

class MyMenus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalShow: false,
            menus: []
        };
    }

    showModal = () => {
        this.setState({ addModalShow: true })
    }

    componentDidMount() {
        fetch(`http://localhost:3000/restaurants/${localStorage.currentRestaurantId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    menus: data.menus
                })
            })
    }

    updateMenus = () => {
        
    }

    renderMenus = () => {
        return this.state.menus.map(menu => {
            return (
                <Card style={{width: '18rem'}} classNAme="my-menus-child">
                    <Card.Img variant="top" src={menu.img_url} />
                    <Card.Body>
                        <Card.Title>{menu.name}</Card.Title>
                        <Card.Text>
                            {menu.description}
                        </Card.Text>
                        <div className='flex-container'>
                            <Link className='child' style={btnMenu}>Edit</Link>
                            <Link className='child' style={btnMenu}>Delete</Link>
                        </div>
                        <div className='flex-container-2'>
                            <Link className='child' style={btnMenuAction} onClick={this.showModal}>
                                Add Item
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            )
        })
    }

    render() {

        let modalClose = () => {
            this.setState({
                addModalShow: false
            })
        }


        return (
            <>
                <Container className="my-menus-parent" style={{ marginTop: '60px', marginBottom: '100px'}}>
                    <CardColumns>
                        {this.renderMenus()}
                    </CardColumns>
                </Container>

                <CreateItem
                    show={this.state.addModalShow}
                    onHide={modalClose}
                />
            </>
        );
    }
}
export default MyMenus;
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
