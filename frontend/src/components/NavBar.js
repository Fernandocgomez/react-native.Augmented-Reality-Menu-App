import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <>
        <Navbar style={navBar}>
          <Navbar.Brand href="#home">Ar Gourmet</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/my-menus" style={navLinks}>My Menus</Link>
            <Link style={navLinks}>Create New Menu</Link>
            <Link style={navLinks}>Pricing</Link>
            <Link style={navLinks}>About Us</Link>
          </Nav>
   
         <Link style={signIn} to="/sign-up">Sign Up</Link>
         <Link to="/login" style={logIn} >Login</Link>
        
        </Navbar>
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


    