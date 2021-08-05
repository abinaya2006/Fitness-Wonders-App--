import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import TrainerListScreen from '../Screens/TrainerListScreen';
import TrainersDetailScreen from '../Screens/TrainersDetailScreen';




export const AppStackNavigator = createStackNavigator({
  TrainersList : {
    screen : TrainerListScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  TrainersDetails : {
    screen : TrainersDetailScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'TrainersList'
  }
);