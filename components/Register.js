/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { robotoWeights } from 'react-native-typography'

class Register extends Component {
  componentDidMount(){
    axios.post('https://reqres.in/api/', {
      id: this.state.id,
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
  submit(){
    axios({
      method: 'post',
      url: 'reqres.in/api/register',
      data1: {
      email: this.state.email,
      password: this.state.password
      }
    });
    let collection ={}
    collection.id = this.state.id
    collection.email= this.state.email,
    collection.password = this.state.password
    console.warn(collection)
  }
  constructor(props){
    super(props)
  this.state =  {
            
           username:'',
           password:''
    };
}
  render(){
    return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
    <Text style={[robotoWeights.light, styles.title]}>Register</Text>
    </View>
    <View style={styles.formContainer}>
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <TextInput
      
      onChangeText = {(text) => this.updateValue(text, 'email')}
      placeholder = "Email"
      placeholderTextColor = '#2c3e50'
      style={styles.input}
      onChangeText= {(text)=>{
        this.setState({email: text});
   }
   }
    
      />    
        <TextInput style={styles.input}
      underlineColorAndroid = 'rgba(0, 0, 0, 0)'
      placeholder = "Password"
      placeholderTextColor = '#2c3e50'
      secureTextEntry
      onChangeText= {(text)=>{
        this.setState({password: text});
   }
   }
     
     
      />    
      <TouchableOpacity
          style={styles.button}
          onPress={() =>{this.submit()}}


        >
          <Text style={[ robotoWeights.thin, styles.buttonText]}>Register </Text>
        </TouchableOpacity>
         </KeyboardAvoidingView>

    </View>
    </View>
    );
  }
} 


export default Register;


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#e35c5c',
    justifyContent:"center",
    alignItems:"center",
   
    flex:1,
  },
  formContainer:{
      flex:1
  },
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:15,
    width:400

  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  title:{
    fontSize:40,
    color:'#fff',
    fontWeight:'300',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  titleContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  
input:{
  borderRadius:10,
  height:50,
  width:370,
  backgroundColor: '#ecf0f1',
  marginBottom:20,
  color: '#2c3e50',
  textAlign: 'left',
  paddingHorizontal:20
},
  container: {
    backgroundColor:'#36d9eb',
      justifyContent:"flex-start",
      alignItems:"center",
     
      flex:1,
  },
  
  button: {
    borderRadius:10,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 14,
    margin:10,
    width:370
  },
  
  buttonText:{
   
    fontSize:20,
    color:'#008e9e',
  fontWeight: '500'
  }
  
});
