import React from 'react'
import {createAppContainer,createSwitchNavigator}  from 'react-navigation'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import PreschoolScreen from  './Screens/preschool'
import WelcomeScreen from './Screens/WelcomeScreen'
import HomeScreen from './Screens/HomeScreen'
import {AppDrawerNavigator} from './Components/AppDrawerNavigation'
import {AppTabNavigator} from './Components/AppTabNavigator'
import ChildScreen from './Screens/child'
import AdultScreen from './Screens/Adult'
import OlderScreen from './Screens/Older'

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer/>
      </SafeAreaProvider>
      
    )
  }
}

const switchNavigator=createSwitchNavigator({
 WelcomeScreen:{screen:WelcomeScreen},
 Drawer: {screen: AppDrawerNavigator},
 BottomTab:{screen:AppTabNavigator},
  Preschool:{screen:PreschoolScreen},
ChildExer:{screen:ChildScreen},
  AdultExer:{screen:AdultScreen},
  OlderExer:{screen:OlderScreen}
})

const AppContainer = createAppContainer(switchNavigator)