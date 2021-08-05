import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import{Card,Header,Icon,Avatar} from 'react-native-elements';


export default class TrainersDetailScreen extends React.Component{

  constructor(props){
    super(props);
    this.state={
      trainerName:this.props.navigation.getParam("details")["first_name"],
      trainerEmail:this.props.navigation.getParam("details")["email_id"],
      trainerAddress:this.props.navigation.getParam("details")["address"],
      trainerContact:this.props.navigation.getParam('details')["contact"],
      image:"#",
    }
  }

  render(){
    return(
      <View>
        <View>
            <Header
            leftComponent={
              <Icon
              name="arrow-left"
              type="feather"
              color="#ffffff"
              onPress={() => this.props.navigation.goBack()}
            />
            }
          centerComponent={{
            text: 'Trainers Details',
            style: {
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'Century Gothic',
            },
          }}
          backgroundColor="#9B4EFF"
        />
          </View>
      <View>
          </View>
          <View>
            
          </View>
          <View style={{flex:0.3}}>
            <Card containerStyle={{marginTop:60}}>
        <Avatar  rounded size="large" containerStyle={styles.avatar} source={{uri:this.state.image}} />
               <Card.Title style={{fontSize:30}}>{this.state.trainerName}'s details</Card.Title>
                 <Card.Divider/>
              
                <Text style={styles.cardText}>Name: {this.state.trainerName}</Text>
             
                <Text style={styles.cardText}>Email: {this.state.trainerEmail}</Text>
             
                <Text style={styles.cardText}>Address: {this.state.trainerAddress}</Text>
                
                <Text style={styles.cardText}>Contact: {this.state.trainerContact}</Text>
             
            </Card>
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  cardText:{
    fontSize:23
  },
  avatar:{
    marginLeft:100
  }
})