import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from "react-native";
import { StackNavigator } from "react-navigation";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Constants from '../../constants/Constants';
import LoadingAnimation from '../../img/carro-de-compras.gif'; 
import * as ProductAction from '../../actions/ProductAction';

class ProductsList extends Component {
  

  componentDidMount() {
    this.props.ProductAction.getProducts();

  }

  _keyExtractor = (item, index) => item.id;

  render() {
    const { navigate } = this.props.navigation;
    const Items = <FlatList contentContainerStyle={styles.list} numColumns={2}
      data={this.props.products || []}
      keyExtractor={this._keyExtractor}
      renderItem={({ item }) => 
      <TouchableHighlight style={{width:'50%'}} onPress={() => navigate("Product", { product: item })} underlayColor="white">
        <View style={styles.view} >
          <Image style={styles.image} source={{uri: item.images[0].src}} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableHighlight>
      }
    />;
    return (
      <ScrollView>
        {this.props.products.length ? Items : 
          <View style={{ alignItems: 'center', justifyContent: 'center',alignContent:'center' }}>
            <Image style={styles.loader} source={LoadingAnimation}/>
            <Text>Cargando...</Text>
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column'
  },
  view: {
    padding: 10,
  },
  loader: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: 150, 
    height: 150
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5
  }
});

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

function mapDispatchToProps(dispatch) {
	return {
		ProductAction: bindActionCreators(ProductAction, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
