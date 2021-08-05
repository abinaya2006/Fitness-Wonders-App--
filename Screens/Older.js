import React from 'react'
import {Text,View,Image,FlatList} from 'react-native'

import OlderCard from './OlderCard'
let older=require("../exerciseJson/OlderAdults.json")

export default class OlderScreen extends React.Component{

  keyExtractor=(item,index)=>index.toString()

  renderItem=({item:olders})=>{
    return(
      <OlderCard olders = {olders} navigation = {this.props.navigation}/>
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
       <FlatList
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={older}
        horizontal={true}
       />
      </View>
    )
  }
}