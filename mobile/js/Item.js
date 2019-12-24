import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';



class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: []
        };
    }

    renderItems = () => {

        return this.props.location.state.map(item => {
            return (<View>
                <TouchableOpacity style={styles.card} onPress={() => { this.tapOnCard(item) }}>
                    <Image style={styles.cardImage} source={{ uri: item.img_2D_url }} />
                    <Text style={styles.cardText}>Name:{item.itemName}</Text>
                    <Text style={styles.cardText}>Description: {item.itemDescription}</Text>

                </TouchableOpacity>
            </View>)
        })
    }

    tapOnCard = (item) => {

        this.setState({
            selectedItem: item
        }, () => {
            const { history } = this.props
        if (history) history.push("/Show3DModel", this.state.selectedItem)
        })
       
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {

        return (
            <View>

                <TouchableOpacity
                    onPress={this.goBack}

                >
                    <Text style={styles.goBack}>&#8592; back</Text>

                </TouchableOpacity>

                <Text style={styles.h1}>Select Item:</Text>
                {this.renderItems()}



            </View>
        )
    }
}
export default Item

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