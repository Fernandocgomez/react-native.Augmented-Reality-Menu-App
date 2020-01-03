import React from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateItem from './CreateItem';
import EditMenu from './EditMenu';

class MyMenus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalShow: false,
            addModalShowEdit: false,
            menus: [],
            menuId: null,
            menuObject: null

        };
    }

    showModal = () => {
        this.setState({ addModalShow: true })
    }

    showModalEdit = () => {
        this.setState({ addModalShowEdit: true })
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
                <Card style={{ width: '18rem', marginTop: '20px' }}>
                    <Card.Img variant="top" src={menu.img_url} />
                    <Card.Body>
                        <Card.Title><Link onClick={() => { this.redirectToItem(menu) }}>{menu.name}</Link></Card.Title>
                        <Card.Text>
                            {menu.description}
                        </Card.Text>
                        <div className='flex-container'>
                            <Link className='child' style={btnMenu} onClick={() => { this.openEditMenuForm(menu) }}>Edit</Link>
                            <Link className='child' style={btnMenu} onClick={() => { this.deleteMenu(menu) }}>Delete</Link>
                        </div>
                        <div className='flex-container-2'>
                            <Link className='child' style={btnMenuAction} onClick={() => { this.openCreateItemForm(menu) }}>
                                Add Item
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            )
        })
    }

    redirectToItem = (menu) => {
        localStorage.setItem("menuId", menu.id)
        localStorage.setItem("menuNameForMenuItems", menu.name)
        localStorage.setItem("menuDescriptionForMenuItems", menu.description)

        this.setState({
            menuId: menu.id
        }, () => { this.props.history.history.push('/my-menus/items', this.state.menuId) })


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
        localStorage.setItem("menuNameForMenuItems", menu.name)
        localStorage.setItem("menuDescriptionForMenuItems", menu.description)
    }

    openEditMenuForm = (menu) => {
        console.log(menu)
        this.showModalEdit()
        this.setState({
            menuId: menu.id,
            menuObject: menu,
        })

    }

    newMenuUpdated = (object) => {
        let newArrayMenus = this.state.menus.filter(menu => menu.id != object.id)
        newArrayMenus.push(object)
        this.setState({
            menus: newArrayMenus
        })


    }

    render() {



        let modalClose = () => {
            this.setState({
                addModalShow: false
            })
        }

        let modalCloseEdit = () => {
            this.setState({
                addModalShowEdit: false
            })
        }





        return (
            <>

                {this.state.menus.length == 0 ? (
                    <>
                        <div className="message-my-menus" >
                                <h1 className="message-my-menus-content">
                                    To add a new menu, click on the "Create New Menu" link on the navegation bar
                            </h1>
                            </div>
                    </>
                ) : (
                        <div >
                            <div className="my-menus-parent" style={{ marginTop: '60px', marginBottom: '100px' }}>

                                    {this.renderMenus()}

                            </div>

                            
                        </div>
                    )}


                <CreateItem
                    show={this.state.addModalShow}
                    onHide={modalClose}
                    menuId={this.state.menuId}
                    menuName={this.state.menuName}
                    history={this.props.history}
                />
                <EditMenu
                    show={this.state.addModalShowEdit}
                    onHide={modalCloseEdit}
                    menuId={this.state.menuId}
                    history={this.props.history}
                    menuObject={this.state.menuObject}
                    menusArray={this.state.menus}
                    newMenuUpdated={this.newMenuUpdated}
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
