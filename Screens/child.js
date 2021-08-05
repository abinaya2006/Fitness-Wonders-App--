import React from 'react'
import {Text,View,Image,FlatList} from 'react-native'

import ChildCard from './childCard'
let childs=require("../exerciseJson/childAndAdult.json")

export default class ChildScreen extends React.Component{

  keyExtractor=(item,index)=>index.toString()

  renderItem=({item:childs})=>{
    return(
      <ChildCard childs = {childs} navigation = {this.props.navigation}/>
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
       <FlatList
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={childs}
        horizontal={true}
       />
      </View>
    )
  }
}