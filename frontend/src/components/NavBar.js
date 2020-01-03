import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateMenu from './CreateMenu';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: [],
      addModalShow: false
    };

  }

  showModal = () => {
    this.setState({ addModalShow: true })
  }

  logout = () => {
    localStorage.clear()
    this.props.logout()

  }

  


  render() {

    let modalClose = () => {
      this.setState({
        addModalShow: false
      })
    }

    console.log(this.props)

    return (
      <>
        <Navbar style={navBar}>
          <Navbar.Brand href="#home">Ar Gourmet</Navbar.Brand>
          <Nav className="mr-auto">

            {this.props.showNavLinks ? (
              <>
                <Link to="/my-menus" style={navLinks}>My Menus</Link>
                <Link style={navLinks} onClick={this.showModal}>Create New Menu</Link>
              </>
            ) : (
                <>
                </>
              )}


    
          </Nav>


          {this.props.showNavLinks ? (
            <>
              <h5>Welcome {localStorage.currentRestaurantName}</h5>
              <Link to="/login" style={logout} onClick={this.logout}>Log out</Link>
            </> 
          ) : (
              <>
                <Link style={signIn} to="/sign-up">Sign Up</Link>
                <Link to="/login" style={logIn} >Login</Link>
              </>
            )}




        </Navbar>
        <CreateMenu
          show={this.state.addModalShow}
          onHide={modalClose}
          
        />
      </>
    );
  }
}

export default NavBar;


const signIn = {
  borderStyle: 'solid',
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#fff',
  color: 'white',
  padding: '6px 15px'
};

const logIn = {
  borderStyle: 'solid',
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#fff',
  color: 'white',
  padding: '6px 22px',
  marginLeft: '15px',
  marginRight: '10px',

};
const logout = {
  borderStyle: 'solid',
  borderRadius: 4,
  borderWidth: 1,
  borderColor: '#fff',
  color: 'white',
  padding: '6px 22px',
  marginLeft: '15px',
  marginRight: '10px',

};

const navLinks = {
  color: 'white',
  padding: '7px 15px',
};

const navBar = {
  backgroundColor: '#26afd1',
  padding: '10px 10px',
  borderStyle: 'solid',
  borderWidth: .5,
  borderTopColor: '#26afd1',
  borderRightColor: '#26afd1',
  borderLeftColor: '#26afd1',
  borderBottomColor: '#303030',
};