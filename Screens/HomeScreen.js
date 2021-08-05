import React from 'react'
import {View,Text,TouchableOpacity,Image,ScrollView,StyleSheet,SafeAreaView,Platform,StatusBar} from 'react-native'
import { Header } from 'react-native-elements'
import MyHeader from '../Components/MyHeader'

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}/>
        <ScrollView style={styles.scrollView}>
        <View>
           <MyHeader title="Exercise based on your age" navigation ={this.props.navigation}  />
        </View>  

        <View>
          <TouchableOpacity style={[styles.routeCard,{ backgroundColor:'#EFA15B'}]}
          onPress={()=>this.props.navigation.navigate('Preschool')}>
             <Image style={styles.imgStyle}
             source={require('../assets/Preschool.png')}/>
             <Text style={styles.textStyle}>  Preschool-Aged Children(3-5 years)   </Text>

          </TouchableOpacity>

          <TouchableOpacity style={[styles.routeCard,{backgroundColor:'#78DFD6'}]}
          onPress={()=>this.props.navigation.navigate('ChildExer')} >
            <Image style={styles.imgStyle}
              source={require('../assets/Children.png')}
            />
           <Text style={styles.textStyle}> Children and Adolescents (6-17 years) </Text>
          </TouchableOpacity >

          <TouchableOpacity style={[styles.routeCard,{backgroundColor:'#AA44D3'}]} 
           onPress={()=>this.props.navigation.navigate('AdultExer')}>
            <Image style={styles.imgStyle}
              source={require('../assets/Adult.png')}
            />
           <Text style={styles.textStyle}>  Adults (18-64 years) </Text>
          </TouchableOpacity >

          <TouchableOpacity style={[styles.routeCard,{backgroundColor:'#3CC8FE'}]} 
            onPress={()=>this.props.navigation.navigate('OlderExer')}>
            <Image style={styles.imgStyle}
              source={require('../assets/Older.png')}
            />
           <Text style={styles.textStyle}> Older Adults (65 years and older) </Text>
          </TouchableOpacity >
          
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles=StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#FBF7EA'
  },
  safeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
  title:{
    flex:0.15
  },
  textStyle:{
    marginLeft:40,
    marginTop:-50,
    color:'white',
    fontWeight:'bold'
  },
  imgStyle:{
    width:300,
    height:250,
    marginTop:-50,
    marginLeft:10
  },
  routeCard:{
    marginTop:35,
    width:300,
    marginLeft:30,
    height:200,
    borderRadius:30
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  },
})