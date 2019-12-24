import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
const restaurantUrl = 'http://fernandocgomez.ngrok.io/restaurants'

class Search extends Component {
   constructor(props) {
      super(props);
      this.state = { 
      search: '',
      restaurants: [],
      restaurantsSort: [],
      isFound: null
      };
   }

   componentDidMount = () => {
      fetch(restaurantUrl)
         .then(res => res.json())
         .then(restaurants => this.setState({
            restaurants: restaurants
         }))
   }

   searchRestaurant = () => {
      const { history } = this.props

      const newArray = this.state.restaurants.filter(restaurant => restaurant.name.toLowerCase().replace(/\s/g, '') === this.state.search.toLowerCase().replace(/\s/g, ''))
      
      if(newArray.length === 0){
         this.renderError()
      }else{
         this.setState({ restaurantsSort: newArray },
            () => {
               if(history) history.push("SelectRestaurant", this.state.restaurantsSort)
            })
      }  
   }

   renderError = () => {
      this.setState({
         isFound: false
      })
   }

   render() {

      if (this.state.restaurants.length === 0) {
         return (
            <View style={styles.container}>
               <ActivityIndicator size='large' />
            </View>
         )
      }

      
      return (

         <View style={styles.container}>
            <Text style={styles.h1}>Search Restaurant</Text>
            {this.state.isFound === false ? <View>
               <Text>No matches found</Text>
            </View> : null}
         <Text style={styles.h1}></Text>


            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholderTextColor="#9a73ef"
               autoCapitalize="none"
               onChangeText={(text) => this.setState({ search: text })}
            />

            <TouchableOpacity
               style={styles.submitButton}
               onPress={this.searchRestaurant}
            >

               <Text style={styles.submitButtonText}> Search!</Text>

            </TouchableOpacity>
            
         </View>
      )
   }
}

export default Search

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",

   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      width: 300
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText: {
      color: 'white',
   },
   h1: {
      fontSize: 20,
      fontWeight: 'bold'
   }
})