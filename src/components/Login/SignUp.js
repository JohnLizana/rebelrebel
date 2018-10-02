import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, ImageBackground, TextInput, AppRegistry } from 'react-native';
import firebaseConfig from '../../config/Fire';
import * as firebase  from 'firebase';
import {FormInput,Avatar} from 'react-native-elements';

//Iniciamos Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default class SignUp extends React.Component {

  state= {email:'', password:'', errorMessage:null}

  handleSignUp = () =>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    console.log('handleSignUp')
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
  }

  handleLogin = ()=>{
      firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
      
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/login.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'>
      <View style={styles.form}>
      <Avatar
        xlarge
        source={{uri: "https://z-p3-scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/37400895_1989532691162337_4100136399653568512_n.jpg?_nc_cat=111&oh=b308361e1636f87a6aed805626459a12&oe=5C2E580B"}}
        onPress={() => console.log("Rebel Rebel!")}
        activeOpacity={1}
      />
      <Text>Create Una Cuenta!</Text>
        <TextInput 
          underlineColorAndroid ={'#2196f1'}  
          autoFocus
          placeholder="Email"
          onChangeText = {email => this.setState({email})}
          value={this.state.email}
          style={styles.input}
        ></TextInput>
        
        <TextInput 
          underlineColorAndroid ={'#2196f1'}
          secureTextEntry
          placeholder="Password" 
          style={styles.input}
          onChangeText= {password => this.setState({password})}
          value={this.state.password}
          ></TextInput>
        
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSignUp}
        >
        <Text>Registrarse</Text>
        </TouchableHighlight>
        
        <Text
          style={{color:'blue'}}
          onPress={() => this.props.navigation.navigate('Login')}
        >¿Ya tienes tu cuenta?, Inicia Sesión </Text>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    borderRadius:5,
    height:50,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#2196f1',
    paddingVertical: 15,
    width:260,
    marginBottom:10,

  },
  form:{
    backgroundColor: 'rgba(255,255,255,1)',        
    borderRadius:10,
    justifyContent:'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 40,
    marginBottom: 20,
    padding: 20,
    marginTop:50,
},
  button:{
    backgroundColor:'#eeeeee',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom:10,
    marginHorizontal:30
   


  },
  backgroundImage:{
    width:'100%',
    height:'100%',
    flex:1
  }
});
