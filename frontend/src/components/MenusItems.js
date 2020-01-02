import React from 'react'
import { Container, Card, CardColumns, Jumbotron, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateNewItemForMyItems from './CreateNewItemForMyItems';

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
            allItemsForSortAllItems: []


        };


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

        let modalClose = () => {
            this.setState({
                addModalShow: false
            })
        }



        // if (this.state.allItems == false ) {
        //     return(

        //     <Spinner animation="border" role="status">
        //         <span className="sr-only">Loading...</span>
        //     </Spinner>

        //     )
        // }


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
                            <Link className='child-menu-item' style={btnMenu} onClick={this.showModal}>Create New Item</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortAllItems} >Show All</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortStartersItems} >Starters</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortMainItems} >Main Dishes</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortSidesItems} >Sides</Link>
                            <Link className='child-menu-item' style={btnMenu} onClick={this.sortDessertsItems} >Desserts</Link>

                        </div>
                    </Jumbotron>
                    <CardColumns>
                        {this.state.allItems ? (
                            <>
                                {this.renderItems()}
                            </>
                        ) : (
                                <>
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </>
                            )}

                    </CardColumns>
                </Container>

                <CreateNewItemForMyItems
                    show={this.state.addModalShow}
                    onHide={modalClose}
                    history={this.props.history}
                    updateAllItems={this.componentDidMount}

                />

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

