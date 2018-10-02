import React, { Component } from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native'
import firebaseConfig from '../config/Fire';
import * as firebase  from 'firebase';

//Iniciamos Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default class Loading extends React.Component{
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? 'Home' : 'Login')
        })
    }
    render(){

        return(

            <View style={styles.container} >
                <Text>Loading</Text>
                <ActivityIndicator size='large' />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    }


})