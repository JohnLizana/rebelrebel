//Menú de navegación (SideBar)
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { NavigationActions } from 'react-navigation'


export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={styles.transparentButton}>
            Inicio
        </Text>
        <Text
          onPress={() => navigation.navigate('Products')}
          style={styles.transparentButton}>
            Tienda
        </Text>
        <Text
          onPress={() => navigation.navigate('CartPage')}
          style={styles.transparentButton}>
            Carro
        </Text>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.transparentButton}>
            Login
        </Text>
        <Text
          style={styles.transparentButton}>
            Perfil
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  transparentButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196f3',
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: '#2196f3',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
  }
})
