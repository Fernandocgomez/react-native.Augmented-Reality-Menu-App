import React, { Component } from 'react';
import { View } from 'react-native';
import Search from './js/Search';
import SelectRestaurant from './js/SelectRestaurant';
import Menu from './js/Menu';
import Item from './js/Item';
import Show3DModel from './js/Show3DModel';
import { NativeRouter, Switch, Route } from 'react-router-native'

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    
    };
  }
  
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Switch>
          
            <Route exact path="/" component={Search} />
            <Route exact path="/SelectRestaurant" component={SelectRestaurant}/>
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Item" component={Item} />
            <Route exact path="/Show3DModel" component={Show3DModel} />
            
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}


