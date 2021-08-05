import React from 'react'
import {Text,View,Image,FlatList} from 'react-native'

import PreschoolCard from './PreschoolCard'
let preschools=require("../exerciseJson/preschoolers.json")

export default class PreschoolScreen extends React.Component{

  keyExtractor=(item,index)=>index.toString()

  renderItem=({item:preschool})=>{
    return(
      <PreschoolCard preschool = {preschool} navigation = {this.props.navigation}/>
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
       <FlatList
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={preschools}
        horizontal={true}
       />
      </View>
    )
  }
}