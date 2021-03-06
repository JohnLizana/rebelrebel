import React from "react";
import {
  Text,
  Button,
  Animated,
  Easing,
  Image
} from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import HomePage from './src/components/Home/HomePage';
import Products from "./src/components/Products/ProductList";
import Product from "./src/components/Products/Product";
import CartPage from './src/components/Cart/CartPage';
import DrawerContainer from './src/components/Drawer/DrawerContainer';
import configureStore from './src/store/configureStore';
import InitialState from './src/reducers/InitialState';

//Login con Firebase 
import Login from './src/components/Login/Login';
import SignUp from './src/components/Login/SignUp';


//Navigator Principal

const DrawerNavigation = DrawerNavigator({

  
    //Listado de productos
    Products: {
      screen: Products,
      navigationOptions: {
        title: "Tienda"
      }
    },
    //Pantalla de inicio
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: "Rebel Rebel Clothing"
    }
  },

  //Producto Específico
    Product: {
      screen: Product,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.product.name
    }),
  },
  //Carro de compra
    CartPage: {
      screen: CartPage,
      navigationOptions: {
        title: "Carro de compras"
    }
  },
  //Pantalla de Login
  Login:{
    screen:Login,
    navigationOptions:{
      title:"Iniciar Sesión"
    }
  },
  SignUp:{
    screen:SignUp,
    navigationOptions:{
      title:"Registrarse"
    }
  }
}, {
    initialRouteName:'Home',
    contentComponent: DrawerContainer
  });


const StackNavigation = StackNavigator({
  DrawerNavigation: { screen: DrawerNavigation }
}, {
    headerMode: 'float',
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: { backgroundColor: '#2196f3' },
      headerTintColor: 'white',
      headerLeft: drawerButton(navigation),
      headerRight: cartButton(navigation, screenProps)
    })
  });

const drawerButton = (navigation) => (
  <Text
    style={{ padding: 15, color: 'white' }}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
    }><Ionicons name="ios-menu" size={30} /></Text>
);

const cartButton = (navigation, screenProps) => (
  <Text style={{ padding: 15, color: 'white' }}
    onPress={() => { navigation.navigate('CartPage') }}
  >
    <EvilIcons name="cart" size={30} />
    {screenProps.cartCount}
  </Text>
);

class CA extends React.Component {
  render() {
    const cart = {
      cartCount: this.props.cart.length
    }
    return (
      <StackNavigation screenProps={cart} />
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const ConnectedApp = connect(mapStateToProps, null)(CA);

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      // Encerramos en Provider la app
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    )
  }
}

export default App;