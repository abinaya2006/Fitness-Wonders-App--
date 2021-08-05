import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert, Image} from 'react-native';

const MyHeader = props => {
  return (
    <Header
     leftComponent={
        <Icon
          name="bars"
          type="font-awesome"
          color="#70DCB7"
          onPress={() =>props.navigation.toggleDrawer()}
        />
      }
      centerComponent={{ text: props.title, style: {color: '#fff', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#9B4EFF"
    />
  );
};

export default MyHeader;