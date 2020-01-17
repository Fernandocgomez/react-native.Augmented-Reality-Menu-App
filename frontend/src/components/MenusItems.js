import React from 'react'
import { Container, Card, CardColumns, Jumbotron, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateNewItemForMyItems from './CreateNewItemForMyItems';
import EditItem from './EditItem';

class MenusItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: [],
            startersItems: [],
            mainItems: [],
            sidesItems: [],
            dessertsItems: [],
            addModalShow: false,
            allItemsForSortAllItems: [],
            addModalShowEdit: false,
            objectItem: false



        };


    }

    editItem = (item) => {

        localStorage.setItem("itemLocalStorageId", item.id)

        this.setState({
            objectItem: item
        }, this.openEditMenuForm())


    }

    updateStateForEditMenu = () => {
        this.componentDidMount()
        this.setState({
            objectItem: false
        })




    }


    openEditMenuForm = () => {
        this.showModalEdit()
    }

    showModalEdit = () => {
        this.setState({ addModalShowEdit: true })
    }


    deleteItem = (item) => {

        fetch(`http://localhost:3000/items/${item.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        },
            this.setState({
                allItems: this.state.allItems.filter(singleItem => singleItem.id !== item.id)
            })
        )
    }

    sortMainItems = () => {
        this.setState({
            allItems: this.state.mainItems
        })
    }

    sortStartersItems = () => {
        this.setState({
            allItems: this.state.startersItems
        })
    }

    sortSidesItems = () => {
        this.setState({
            allItems: this.state.sidesItems
        })
    }

    sortDessertsItems = () => {
        this.setState({
            allItems: this.state.dessertsItems
        })
    }

    sortAllItems = () => {
        if (this.props.history.location.state == undefined) {
            console.log(`http://localhost:3000/menus/${localStorage.menuId}`)

            fetch(`http://localhost:3000/menus/${localStorage.menuId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    let starters = []
                    let mainDishes = []
                    let sides = []
                    let desserts = []


                    data.items.map(item => {

                        if (item.category == "Starters") {
                            starters.push(item)
                        }
                        if (item.category == "Main Dishes") {
                            mainDishes.push(item)
                        }
                        if (item.category == "Sides") {
                            sides.push(item)
                        }
                        if (item.category == "Desserts") {
                            desserts.push(item)
                        }

                    })

                    this.setState({
                        allItems: data.items,
                        startersItems: starters,
                        mainItems: mainDishes,
                        sidesItems: sides,
                        dessertsItems: desserts,
                        allItemsForSortAllItems: data.items,

                    })
                })
        } else {


            fetch(`http://localhost:3000/menus/${this.props.history.location.state}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    let starters = []
                    let mainDishes = []
                    let sides = []
                    let desserts = []


                    data.items.map(item => {

                        if (item.category == "Starters") {
                            starters.push(item)
                        }
                        if (item.category == "Main Dishes") {
                            mainDishes.push(item)
                        }
                        if (item.category == "Sides") {
                            sides.push(item)
                        }
                        if (item.category == "Desserts") {
                            desserts.push(item)
                        }

                    })


                    this.setState({
                        allItems: data.items,
                        startersItems: starters,
                        mainItems: mainDishes,
                        sidesItems: sides,
                        dessertsItems: desserts

                    })
                })
        }

        this.setState({
            allItems: this.state.allItemsForSortAllItems
        })
    }

    showModal = () => {
        this.setState({ addModalShow: true })
    }

    componentDidMount = () => {


        if (this.props.history.location.state == undefined) {
            console.log(`http://localhost:3000/menus/${localStorage.menuId}`)

            fetch(`http://localhost:3000/menus/${localStorage.menuId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    let starters = []
                    let mainDishes = []
                    let sides = []
                    let desserts = []


                    data.items.map(item => {

                        if (item.category == "Starters") {
                            starters.push(item)
                        }
                        if (item.category == "Main Dishes") {
                            mainDishes.push(item)
                        }
                        if (item.category == "Sides") {
                            sides.push(item)
                        }
                        if (item.category == "Desserts") {
                            desserts.push(item)
                        }

                    })

                    this.setState({
                        allItems: data.items,
                        startersItems: starters,
                        mainItems: mainDishes,
                        sidesItems: sides,
                        dessertsItems: desserts,
                        allItemsForSortAllItems: data.items,

                    })
                })
        } else {


            fetch(`http://localhost:3000/menus/${this.props.history.location.state}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    let starters = []
                    let mainDishes = []
                    let sides = []
                    let desserts = []


                    data.items.map(item => {

                        if (item.category == "Starters") {
                            starters.push(item)
                        }
                        if (item.category == "Main Dishes") {
                            mainDishes.push(item)
                        }
                        if (item.category == "Sides") {
                            sides.push(item)
                        }
                        if (item.category == "Desserts") {
                            desserts.push(item)
                        }

                    })


                    this.setState({
                        allItems: data.items,
                        startersItems: starters,
                        mainItems: mainDishes,
                        sidesItems: sides,
                        dessertsItems: desserts

                    })
                })
        }




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
                            <Link className='child' style={btnMenu} onClick={() => this.editItem(item)}>Edit</Link>
                            <Link className='child' style={btnMenu} onClick={() => this.deleteItem(item)}>Delete</Link>
                        </div>

                    </Card.Body>
                </Card>
            )
        })
    }









    render() {

        console.log(this.state)
        console.log(this.props)

        let modalClose = () => {
            this.setState({
                addModalShow: false
            })
        }
        let modalCloseEdit = () => {
            this.setState({
                objectItem: false,
                addModalShowEdit: false

            })
        }

        return (
            <>
                <Container style={{ marginTop: '60px' }}>

                    <Jumbotron>
                        <h1 className="h1-menus-items">Menu Name: {localStorage.menuNameForMenuItems}</h1>
                        <p className="p-menus-items">
                            <strong>Menu Description:</strong> {localStorage.menuDescriptionForMenuItems}
                        </p>

                        <div className='flex-container'>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.showModal}>Create New Item</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortAllItems} >Show All</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortStartersItems} >Starters</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortMainItems} >Main Dishes</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortSidesItems} >Sides</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortDessertsItems} >Desserts</Link>

                        </div>
                    </Jumbotron>
                </Container>


                {this.state.allItems ? (
                    <>
                        




                        {this.state.allItems.length == 0 ? (
                            <>
                                <div className="message-my-menus-items" >
                                    <h1 className="message-my-menus-content">
                                        To add a item, click on the "Create New Item" button
                            </h1>
                                </div>
                            </>
                        ) : (
                                <div >
                                    <div className="my-menus-parent" style={{ marginTop: '60px', marginBottom: '100px' }}>

                                    {this.renderItems()}

                                    </div>


                                </div>
                            )}


                    </>
                ) : (
                        <>
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </>
                    )}



                <CreateNewItemForMyItems
                    show={this.state.addModalShow}
                    onHide={modalClose}
                    history={this.props.history}
                    updateAllItems={this.componentDidMount}

                />



                {
                    this.state.objectItem
                        ? (
                            <>
                                <EditItem
                                    show={this.state.addModalShowEdit}
                                    onHide={modalCloseEdit}
                                    updateStateForEditMenu={this.updateStateForEditMenu}
                                    objectItem={this.state.objectItem}
                                />
                            </>
                        ) : (
                            <>

                            </>
                        )}



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

