import { createDrawerNavigator } from 'react-navigation-drawer';
import SideBarMenu from "./SideBarMenu";
import {Icon} from 'react-native-elements';
import React from 'react'
import HomeScreen from "../Screens/HomeScreen";
// import RemainderScreen from "../Screens/RemainderScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import TrainerListScreen from "../Screens/TrainerListScreen";
import {AppTabNavigator} from './AppTabNavigator'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
    },
    TrainersList: {
        screen: TrainerListScreen,
         navigationOptions:{
      drawerIcon : <Icon name="person" type ="MaterialIcons" />,
      drawerLabel : "Trainers List"
    }
    },
   
},
    {
        contentComponent: SideBarMenu
    },
    {
        initialRouteName: 'Home'
    })