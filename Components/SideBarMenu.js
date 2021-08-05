import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'
import {Avatar,Icon} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {RFValue} from 'react-native-responsive-fontsize'


export default class CustomSideBarMenu extends Component{

  state={
    userId:firebase.auth().currentUser.email,
    image:"#",
    name:'',
    docId:''
  }

  selectPicture=async()=>{
    const {cancelled,uri}=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })
    if(!cancelled){
      this.setState({
        image:uri
      })
      this.uploadImage(uri,this.state.userId)
    }
  }



  uploadImage=async(uri,imageName)=>{
    var response = await fetch(uri)
    var blob = await response.blob()
    var ref = firebase.storage().ref().child("user_profiles/"+ imageName);
    return ref.put(blob).then((response)=>{
      this.fetchImage(imageName)
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
    db.collection('users').where('email_id','==',this.state.userId)
    .onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        this.setState({
          name:doc.data().first_name + " " + doc.data().last_name
        })
      })
    })

    db.collection('trainers').where('email_id','==',this.state.userId)
    .onSnapshot((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        this.setState({
          name:doc.data().first_name + " " + doc.data().last_name
        })
      })
    })
  }

  componentDidMount(){
    this.fetchImage(this.state.userId)
    this.getUserProfile()
  }

  render(){
    return(
      <View style={{flex:1}}>
         <View style={{flex:0.5,alignItems:'center',backgroundColor:'#9B4EFF'}}>
          <Avatar 
             rounded
             source={{
               uri:this.state.image
             }}
            size="large"
            onPress={()=>this.selectPicture()}
            containerStyle={styles.imageContainer}
            showEditButton
           />
           <Text style={{fontSize:20,padding:10,color:'#fff'}}>{this.state.name}</Text>
         </View>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Icon 
             name="logout"
             type="MaterialCommunityIcons"
             size={RFValue(30)}
             iconStyle={{marginLeft:RFValue(-330)}}
          />
            <Text style={{fontSize:RFValue(25),marginLeft:RFValue(30),marginTop:RFValue(-30)}}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  imageContainer: {
    flex: 0.75,
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 40,
  },
  
})
