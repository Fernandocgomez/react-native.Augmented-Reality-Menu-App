'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,


} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();
    this.state = {

    };

  }

  tap = () => {

    this.props.history.goBack('Item')

  }

  render() {
    console.log(this.props.item)

    return (

      <ViroARScene>

        <ViroAmbientLight color={"#FFFFFF"} intensity={1000} />
        {/* <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[-.04, -2, -4.5]} color="#ffffff" castsShadow={true} /> */}




        <Viro3DObject animation={{ name: "rotate", run: true, loop: true }}
          source={{
            uri: `${this.props.item.obj_url}`
          }}
          resources={[{ uri: `${this.props.mtl_url}` },

          { uri: `${this.props.texture_url}` }]}

          position={[-.04, -2, -4.5]}
          scale={[.025, .025, .025]}
          type="OBJ" 
          onClick={this.tap}/>





      </ViroARScene>

    );
  }

}


ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 1600, //.25 seconds
  },
});



module.exports = HelloWorldSceneAR;
