import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

var sharedProps = {
    apiKey:"API_KEY_HERE",
  }

var InitialARScene = require('./HelloWorldSceneAR');

export default class Show3DModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sharedProps : sharedProps
    }
  }

 
  
  render() {
    
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene, passProps:{item: this.props.location.state, history: this.props.history}}} />
    );
    }
  }

var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#fff',
    textAlign:'center',
    fontSize : 20
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = Show3DModel
