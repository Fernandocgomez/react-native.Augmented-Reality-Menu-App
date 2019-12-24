import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class App extends Component {
  state = {
    visible: true,
    modalIsOpen: false
  }
  toggleAlert() {
    this.setState({
      visible: ! this.state.visible
    });
  }
  toggleModal() {
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen
    });
  }
  render() {
    return (
      <Container>
      </Container>
       
    );
  }
}

export default App;