import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, ImageBackground , TextInput, AppRegistry, Alert } from 'react-native';
import firebaseConfig from '../../config/Fire';
import * as firebase  from 'firebase';
import {FormInput, Avatar} from 'react-native-elements';

//Iniciamos Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default class Login extends React.Component {

  state= {email:'', password:'', errorMessage:null}

  handleLogin = () =>{
  
  firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
  .then(()=> this.props.navigation.navigate('Products')).catch(e => this.setState({errorMessage:e})

  //Alert.alert('Ops!',this.state.errorMessage,[{text:'Aceptar'}])
)
  //console.log(this.props.errorMessage)

  }


  render() {

    return (
      <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/login.jpg')}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
      <View style={styles.form}>
      <Avatar
        xlarge
        source={{uri: "https://z-p3-scontent.flim5-3.fna.fbcdn.net/v/t1.0-9/39972118_297077177764142_892804395236851712_n.png?_nc_cat=0&oh=14e1db49d517be8b5eac530801689a53&oe=5C2D53C9"}}
        onPress={() => console.log("Mobee!")}
        activeOpacity={1}
      />
      <Text>Ingresa</Text>
      <Text errorMessage={this.state.errorMessage} style={{color:'red'}}></Text>
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
          onPress={this.handleLogin}
          style={styles.button}
          
        >
          <Text style={{color:'#FFF'}} >Iniciar Sesión</Text>
        </TouchableHighlight>
        <Text
          style={{color:'blue'}}
          onPress={() => this.props.navigation.navigate('SignUp')}
        >
        ¿No tienes una cuenta?, ¡Crea una cuenta!
        </Text>
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
    alignContent: 'center',
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

  button:{
    backgroundColor:'#2196f3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom:10,
    marginHorizontal:30,
    marginTop:20,
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
  
  backgroundImage:{
    width:'100%',
    height:'100%',
    flex:1
  }
});
