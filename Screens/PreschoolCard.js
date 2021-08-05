import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Header,Icon} from 'react-native-elements'

export default class PreschoolCard extends Component{
  render(){
    return(
      <View style={{backgroundColor:'#70DCB7'}}>
      <Header  
      leftComponent={
              <Icon
              name="arrow-left"
              type="feather"
              color="#ffffff"
              onPress={() => this.props.navigation.navigate("BottomTab")}
            />
            }
  centerComponent={{ text: 'Preschoolers(3-5 years)', style: { color: '#fff',marginLeft:50} 
}}
   backgroundColor = "#9B4EFF"/>
     
        <View style = {{marginTop:10, marginLeft:20, marginRight:20, backgroundColor:'green', flexDirection:'row'}}>
          <Image source = {{uri:this.props.preschool.img}} style ={{flex:2.5, width:300, height:200}}/>
        </View>
        <View>
         <Text style = {{flex:0.5,marginLeft:20,backgroundColor:"#9B4EFF",width:300,height:20,color:'white',textAlign:'center'}}>{this.props.preschool.name}</Text>
        </View>
        <View>
        <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#E7C7FF",width:300,color:'black',fontWeight:'bold',textDecorationLine:'underline'}}>Description</Text>
        <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#E7C7FF",width:300,color:'white'}}>{this.props.preschool.description}</Text>
        </View>
        <View>
        <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#8C88F7",width:300,color:'black',fontWeight:'bold',textDecorationLine:'underline'}}>Procedures</Text>
         <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#8C88F7",width:300,color:'white'}}>{this.props.preschool.procedure}</Text>
        </View>
        
      
      </View>
    )
  }
}