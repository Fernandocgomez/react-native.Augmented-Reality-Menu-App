import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';


class SelectRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            tapCard: []
        };

    }

    componentDidMount() {
        if (this.props.location.state) {
            this.setState({
                restaurants: this.props.location.state
            })
        }

    }

    renderRestaurants = () => {
        return this.state.restaurants.map(restaurant => {
            return (<View>
                <TouchableOpacity style={styles.card} onPress={() => { this.tapOnCard(restaurant) }}>
                    <Image style={styles.cardImage} source={{ uri: restaurant.logo_url }} />
                    <Text style={styles.cardText}>Restaurant:{restaurant.name}</Text>
                    <Text style={styles.cardText}>Address: {restaurant.address1}, {restaurant.city}, {restaurant.state}, {restaurant.zipCode}</Text>

                </TouchableOpacity>
            </View>)
        })
    }

    tapOnCard = (restaurant) => {
        console.log(restaurant)
        const { history } = this.props
        
        this.setState({
            tapCard: restaurant.menus
        }, () => { if (history) history.push("Menu", this.state.tapCard) })
    }

    goBack = () => {
        this.props.history.goBack()
    }


    render() {

        if (this.state.restaurants.length === 0) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }

        console.log(this.props)
        console.log(this.state.tapCard)


        return (
            <ScrollView>
            <View>
                <TouchableOpacity
                    onPress={this.goBack}

                >
                    <Text style={styles.goBack}>&#8592; back</Text>

                </TouchableOpacity>
                <Text style={styles.h1}>Select Restaurant:</Text>
                {this.renderRestaurants()}

            </View>
            </ScrollView>
        )
    }
}
export default SelectRestaurant

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
        marginTop: 20
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: "cover"

    },
    cardText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'
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