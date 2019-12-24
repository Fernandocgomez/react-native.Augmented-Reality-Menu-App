import React from 'react'
import { Container } from 'react-bootstrap';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div style={footer}>
        
          
        <Container style={{marginLeft: "480px", color: '#fff'}}><p>Copyright © 2020 AR Gourmet </p></Container>
        
        
        </div>
      </>
    );
  }
}

export default Footer; 








const footer = {
  backgroundColor: '#595c5d', 
  padding: '40px 40px', 
  marginTop: '30px'
};



