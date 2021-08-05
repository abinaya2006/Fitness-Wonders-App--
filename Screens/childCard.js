import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Header,Icon} from 'react-native-elements'

export default class ChildCard extends Component{
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
  centerComponent={{ text: 'Children & Adolescents (6-17years) ', style: { color: '#fff',textAlign:'center'} 
}}
   backgroundColor = "#9B4EFF"/>
     
        <View style = {{marginTop:10, marginLeft:20, marginRight:20, backgroundColor:'green', flexDirection:'initial'}}>
          <Image source = {{uri:this.props.childs.img}} style ={{flex:2.5, width:300, height:200}}/>
        </View>
        <View>
         <Text style = {{flex:0.5,marginLeft:20,backgroundColor:"#9B4EFF",width:300,height:20,color:'white',textAlign:'center'}}>{this.props.childs.name}</Text>
        </View>
        <View>
        <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#E7C7FF",width:300,color:'black',fontWeight:'bold',textDecorationLine:'underline'}}>Description</Text>
        <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#E7C7FF",width:300,color:'white'}}>{this.props.childs.description}</Text>
        </View>
        <View>
        <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#8C88F7",width:300,color:'black',fontWeight:'bold',textDecorationLine:'underline'}}>Procedures</Text>
         <Text  style = {{flex:0.5,marginLeft:20,backgroundColor:"#8C88F7",width:300,color:'white'}}>{this.props.childs.procedure}</Text>
        </View>
        
      
      </View>
    )
  }
}