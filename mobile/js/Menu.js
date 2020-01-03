import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';


class Menu extends Component {
   constructor(props) {
      super(props);
      this.state = {
         starters: [],
         mainDishes: [],
         sides: [],
         desserts: []
      };
   }

   componentDidMount() {
      const startersArray = []
      const mainDishesArray = []
      const sidesArray = []
      const dessertsArray = []

      this.props.location.state.map(menu => menu.items.map(item => {if(item.category === "Main Dishes"){
         mainDishesArray.push(item)
      }}))
      this.props.location.state.map(menu => menu.items.map(item => {if(item.category === "Starters"){
         startersArray.push(item)
      }}))
      this.props.location.state.map(menu => menu.items.map(item => {if(item.category === "Sides"){
         sidesArray.push(item)
      }}))
      this.props.location.state.map(menu => menu.items.map(item => {if(item.category === "Desserts"){
         dessertsArray.push(item)
      }}))


      console.log(startersArray, mainDishesArray, sidesArray, dessertsArray)

      this.setState({
         starters: startersArray,
         mainDishes: mainDishesArray,
         sides: sidesArray,
         desserts: dessertsArray
      })
   }

   showStarters = () => {
      const { history } = this.props
      if (history) history.push("Item", this.state.starters)
   }

   showMainDishes = () => {
      const { history } = this.props
      if (history) history.push("Item", this.state.mainDishes)
   }

   showSides = () => {
      const { history } = this.props
      if (history) history.push("Item", this.state.sides)
   }

   showDesserts = () => {
      const { history } = this.props
      if (history) history.push("Item", this.state.desserts)
   }

   goBack = () => {
      this.props.history.goBack()
  }

   render() {

      console.log(this.props)

      return (
         
         <View style={styles.container}>

            <TouchableOpacity
               onPress={this.goBack}

            >
               <Text style={styles.goBack}>&#8592; back</Text>

            </TouchableOpacity>

            <Text style={styles.h1}>Select Category:</Text>
            <View style={{ marginTop: 100 }}>

               <TouchableOpacity
                  style={styles.card}
                  onPress={this.showStarters}
               >
                  <Text style={styles.cardText}>Starters</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.card}
                  onPress={this.showMainDishes}
               >
                  <Text style={styles.cardText}>Main Dishes</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.card}
                  onPress={this.showSides}
               >
                  <Text style={styles.cardText}>Sides</Text>
               </TouchableOpacity>

               <TouchableOpacity
                  style={styles.card}
                  onPress={this.showDesserts}
               >
                  <Text style={styles.cardText}>Desserts</Text>
               </TouchableOpacity>
            </View>

         </View>
      )
   }
}
export default Menu

const styles = StyleSheet.create({
   container: {
      marginTop: 10,
      backgroundColor: '#F5FCFF'
   },
   card: {
      backgroundColor: '#fff',
      marginBottom: 10,
      marginLeft: '2%',
      width: '96%',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 1,
      shadowOffset: {
         width: 3,
         height: 3
      },
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center"
   },
   cardText: {
      padding: 10,
      fontSize: 30,
      fontWeight: 'bold',

   },
   h1: {
      fontSize: 40,
      fontWeight: 'bold'
   },
   goBack: {
      fontSize: 25,
      color: 'blue',
      marginBottom: 10
   }
})