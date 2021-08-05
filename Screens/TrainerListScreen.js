import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem,Avatar,Icon } from 'react-native-elements'

import firebase from 'firebase';
import db from '../config'
import MyHeader from '../Components/MyHeader'


export default class TrainerListScreen extends React.Component{
  constructor(){
    super()
    this.state = {
   userId  : firebase.auth().currentUser.email,
      trainersList : [],
      image:"#",
    name:'',
    docId:''
    }
   this.requestRef = null;
  }

  getTrainersList =()=>{
    this.requestRef = db.collection("trainers")
    .onSnapshot((snapshot)=>{
      var trainersList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        trainersList : trainersList
      });
    })
  }

  
  fetchImage=(imageName)=>{
    var storageRef=firebase.storage().ref().child("user_profiles/"+ imageName);
    storageRef.getDownloadURL().then((url)=>{
      this.setState({
        image:url
      })
    })
    .catch((error)=>{
      this.setState({
        image:"#"
      })
    })
  }
  
  getUserProfile(){
  
    db.collection('trainers')
    .onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        this.setState({
          name:doc.data().first_name + " " + doc.data().last_name
        })
      })
    })
  }

  componentDidMount(){
    this.getTrainersList()
    this.fetchImage(this.state.userId)
    this.getUserProfile()
  }

    componentWillUnmount() {
    this.requestRef();
  }
  keyExtractor = (item, index) => index.toString()

 renderItem = ({ item }) => (

  <ListItem bottomDivider>
    <Avatar  rounded source={{uri:this.state.image}} />
    <ListItem.Content>
      
      <ListItem.Title>{item.first_name}</ListItem.Title>
      <ListItem.Subtitle>{item.email_id}</ListItem.Subtitle>
      
    </ListItem.Content>
    
    <TouchableOpacity style={styles.button} 
      onPress={()=>{
        this.props.navigation.navigate('TrainersDetails',{'details':item})
      }}>
        <Text>View</Text>
      </TouchableOpacity>
  </ListItem>
)

  render(){
    return(
      <View style={{flex:1}}>
         <MyHeader title="Trainers List"  navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.trainersList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Trainers</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.trainersList}
                renderItem={this.renderItem}
              />

            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#70DCB7",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})