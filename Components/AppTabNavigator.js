import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Icon} from 'react-native-elements'
import HomeScreen from '../Screens/HomeScreen'
import TrainerListScreen from '../Screens/TrainerListScreen'
import {AppStackNavigator} from './AppStackNavigator'



export const AppTabNavigator = createBottomTabNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon :  <Image source={require("../assets/outline_home_black_24dp.png")} style={{width:30, height:30}}/>,
       }
  },
  TrainersList: {
    screen: AppStackNavigator,
    navigationOptions:{
      tabBarIcon:<Image source={require("../assets/outline_people_black_24dp.png")} style={{width:30, height:30}}/>
    }
  }
});