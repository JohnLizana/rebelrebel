import React, { Component } from 'react';
import {StyleSheet, Platform} from 'react-native'
import { View, Text, SwipeRow } from 'native-base';
import {Button, Icon} from 'native-base'
import {createMaterialTopTabNavigator} from 'react-navigation'
import {Header} from 'react-native-elements'

import HomeTab from './AppTabNavigator/HomeTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import CarTab from './AppTabNavigator/CarTab'


export default class Home extends Component{

    state= {currentUser:null}

    render(){
            const {currentUser} = this.state
        return(
                <AppTabNavigator style= {styles.tab}/>
        );
    }
} 

const AppTabNavigator = createMaterialTopTabNavigator({

    HomeTab:{
        screen:HomeTab
    },
    CarTab:{
        screen:CarTab
    },
    ProfileTab:{
        screen:ProfileTab
    },
},{
        animationEnabled:true,
        tabBarPosition:"bottom",
        swipeEnable:true,
        backgroundColor:'#FFF',
        tabBarOptions:{
        activeTintColor: '#000',
        inactiveTintColor:'#d1cece',
        showIcon:true,
        showLabel:false,
        backgroundColor: '#FFF',

        },
        style:{
            backgroundColor: '#FFF',       
        }
    }
)
const styles = StyleSheet.create({

    container:{
        alignContent: 'center',
        alignItems: 'center',
    },
    tab:{
        backgroundColor: '#FFF',
    }
})