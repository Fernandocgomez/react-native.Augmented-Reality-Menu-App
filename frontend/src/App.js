import React from 'react'
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import MyMenus from './components/MyMenus';
import './App.css';
import MenusItems from './components/MenusItems';
import CreateMenu from './components/CreateMenu';
import S3 from 'aws-s3';
import CreateItem from './components/CreateItem';
let amazonS3Key = require('./components/AmazonKey.js')


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavLinks: JSON.parse(localStorage.getItem('showNavLinks')) || false, 
     
      
    };

  }

  checkToken = () => {
    if (localStorage.token) {
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

      
      <BrowserRouter>
          
          <NavBar showNavLinks={this.state.showNavLinks} logout={this.logout} />
          <Switch>
            <Route exact path='/login' component={(history) => <LoginForm checkToken={this.checkToken} history={history} />} />
            <Route exact path='/sign-up' component={(history) => <SignUpForm  history={history}/>} />
            <Route exact path='/my-menus' component={(history) => <MyMenus  history={history}/>} />
            <Route exact path='/my-menus/items' component={(history) => <MenusItems  history={history}/>} />
            <Route exact path='/create-menu' component={(history) => <CreateMenu history={history}/>} />   
            <Route exact path='/create-item' component={(history) => <CreateItem history={history}/>} />   
          </Switch>
          <Footer />
      </BrowserRouter>
      

    );
  }
}

export default App; 