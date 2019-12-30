import React from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateItem from './CreateItem';

class MyMenus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalShow: false,
            menus: [], 
            menuId: null, 
            menuName: null, 
            
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

    
    renderMenus = () => {
        return this.state.menus.map(menu => {
            return (
                <Card style={{width: '18rem'}} classNAme="my-menus-child">
                    <Card.Img variant="top" src={menu.img_url} />
                    <Card.Body>
                        <Card.Title><Link onClick={() => {this.redirectToItem(menu)}}>{menu.name}</Link></Card.Title>
                        <Card.Text>
                            {menu.description}
                        </Card.Text>
                        <div className='flex-container'>
                            <Link className='child' style={btnMenu}>Edit</Link>
                            <Link className='child' style={btnMenu} onClick={() => {this.deleteMenu(menu)}}>Delete</Link>
                        </div>
                        <div className='flex-container-2'>
                            <Link className='child' style={btnMenuAction} onClick={() => {this.openCreateItemForm(menu)}}>
                                Add Item
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            )
        })
    }

    redirectToItem = (menu) => {
        this.setState({
            menuId: menu.id
        }, () => {this.props.history.history.push('/my-menus/items', this.state.menuId)})
        
        
    }

    deleteMenu = (menu) => {

        fetch(`http://localhost:3000/menus/${menu.id}`, {
            method: 'DELETE', 
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        },
        this.setState({
            menus: this.state.menus.filter(singleMenu => singleMenu.id !== menu.id)
        })
        )
    }

    openCreateItemForm = (menu) => {
        this.showModal()
        this.setState({
            menuId: menu.id,
            menuName: menu.name
        })
        

    }
    

    render() {

        

        let modalClose = () => {
            this.setState({
                addModalShow: false
            })
        }

        console.log(this.props)
        console.log(this.state)
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
                    menuId={this.state.menuId}
                    menuName={this.state.menuName}
                    history={this.props.history}
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
