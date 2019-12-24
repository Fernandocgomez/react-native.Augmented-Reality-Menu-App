'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
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

        <ViroAmbientLight color={"#FFFFFF"} intensity={800} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[-.04, -2, -4.5]} color="#ffffff" castsShadow={true} />


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

        {/* <Viro3DObject source={require('./res/model-1.glb')}
          position={[0.0, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
          type="GLB"
        /> */}

        {/* <Viro3DObject source={require('./res/model.obj')}
          resources={[require('./res/materials.mtl'),
          require('./res/texture.jpg'),
          ]}
          position={[-.04, -2, -4.5]}
          scale={[.025, .025, .025]}
          type="OBJ" 
        /> */}



      </ViroARScene>

    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 900, //.25 seconds
  },
});



module.exports = HelloWorldSceneAR;
