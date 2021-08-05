import React from 'react'
import {Text,View,Image,FlatList} from 'react-native'

import AdultCard from './AdultCard'
let adult=require("../exerciseJson/Adult.json")

export default class AdultScreen extends React.Component{

  keyExtractor=(item,index)=>index.toString()

  renderItem=({item:adults})=>{
    return(
      <AdultCard adults = {adults} navigation = {this.props.navigation}/>
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
       <FlatList
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={adult}
        horizontal={true}
       />
      </View>
    )
  }
}