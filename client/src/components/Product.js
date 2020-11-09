import * as React from 'react';
import {FlatList} from 'react-native';
import {Surface, Text} from 'react-native-paper';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import data from '../assets/data';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const width = Math.round(screenWidth / 2.3);
const height = Math.round(screenHeight / 3.3);

import * as RootNavigation from '../navigation/Navigating';

const Product = () => (
  <View
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}>
    {data.products.map((product) => (
      <TouchableOpacity
        id={product.id}
        onPress={() => RootNavigation.navigate('ProductDetails', {product})}>
        <Surface style={styles.surface}>
          <Image style={styles.productImage} source={product.image} />
          <View style={styles.productDetails}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              {product.name}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 15}}>
              ${product.price}
            </Text>
            <Text>
              {product.rating} Stars, {product.reviews} Reviews
            </Text>
          </View>
        </Surface>
      </TouchableOpacity>
    ))}
  </View>
);

export default Product;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: height,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    width: width,
    borderRadius: 10,
    //alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  productImage: {
    flex: 4,
    alignSelf: 'stretch',
    marginBottom: 5,
    width: undefined,
    borderRadius: 5,
    height: undefined,
  },
  productDetails: {
    //flexDirection: 'row',
    //flex: 1,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: 5,
    //marginTop: 10,
  },
});
