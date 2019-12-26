import React from 'react'
import {  } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  useHistory
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
    this.state = {
      showNavLinks: JSON.parse(localStorage.getItem('showNavLinks')) || false
    };
    
  }

  checkToken = () => {
    if(localStorage.token){
      this.setState({
        showNavLinks: true
      }, () => {
        localStorage.setItem('showNavLinks', JSON.stringify(this.state.showNavLinks))
      })
    }
  }

  logout = () => {
    this.setState({
      showNavLinks: false
    })
  }

  render() {
    
    return (
      
      <Router>
      <NavBar showNavLinks={this.state.showNavLinks} logout={this.logout}/>

        <Switch>

          

          <Route exact path="/sign-up">
            <SignUpForm /> 
          </Route>
          <Route exact path="/login">
            <LoginForm checkToken={this.checkToken}/> 
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