import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  Button,
  Image,
  ScrollView
} from "react-native";

class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{alignItems:"stretch",justifyContent:'space-between'}}>
        <ScrollView
          horizontal
          scrollEventThrottle={20}
          
          style={{ marginBottom: 10}}
        >
          <Image
            style={{width:'100%'}}
            source={{ uri: 'https://z-p3-scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/37400895_1989532691162337_4100136399653568512_n.jpg?_nc_cat=111&oh=b308361e1636f87a6aed805626459a12&oe=5C2E580B' }} style={styles.sliderImage}
          />
          <Image
            source={{ uri: 'https://rebelrebel.cl/wp-content/uploads/2018/09/tshirt.jpg' }} style={styles.sliderImage}
          />
         
        </ScrollView>
        <View style={{alignItems:"center"}} >  
          <Text style={{fontSize:20,fontWeight:'bold', alignItems:'center'}}>¡Bienvenido a nuestra tienda!</Text>
          <Button style={{marginTop:20}}  title="Ir a Tienda" onPress={() => navigate("Products")}></Button>
        </View>
        <View style={{marginTop:100, paddingBottom:10,}} >
          <Button style={styles.btnfooter} title="Iniciar Sesión" onPress={() => navigate("Login")}></Button>
        </View> 
        <View><Button color={'#a9a9a9'} style={styles.btnfooter} title="Registrarse" onPress={() => navigate("SignUp")}></Button></View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10
  },
  sliderImage: {
    height: 360,
    width: 410
  },
  buttontienda:{
    alignContent: 'center',
    paddingBottom: 10,
    marginBottom: 10,
  },

  footer:{
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop:10,
    paddingHorizontal: 20,
    marginTop: 100,
    paddingBottom: 10,
  },
  btnfooter:{
    alignItems: 'baseline',
    marginHorizontal:20,
  }
});

export default HomePage;
