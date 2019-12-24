import React from 'react'
import {  } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import MyMenus from './components/MyMenus';

import './App.css';
import MenusItems from './components/MenusItems';
import CreateMenu from './components/CreateMenu';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      
      <Router>
      <NavBar />

        <Switch>

          <Route exact path="/sign-up">
            <SignUpForm /> 
          </Route>
          <Route exact path="/login">
            <LoginForm /> 
          </Route>
          <Route exact path="/my-menus">
            <MyMenus /> 
          </Route>
          <Route exact path="/menus-items">
            <MenusItems /> 
          </Route>
          <Route exact path="/create-menu">
            <CreateMenu /> 
          </Route>

        </Switch>


        <Footer /> 
        </Router>
      
      
    );
  }
}

export default App; 