import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Surface, Text} from 'react-native-paper';

function ProductDetails({navigation, route}) {
  const {product} = route.params;
  return (
    <View style={{flex: 1}}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={product.image} />
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.detailsView}>
          <Text
            style={{
              fontSize: 30,
              marginRight: 20,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            {product.name}
          </Text>
          <Text
            style={{
              fontSize: 30,
              marginRight: 20,
              fontWeight: '400',
            }}>
            Price: ${product.price}
          </Text>
        </View>
        <View style={styles.detailsView}>
          <Text
            style={{
              fontSize: 30,
              marginRight: 20,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            {product.rating} Stars
          </Text>
          <Text
            style={{
              fontSize: 30,
              marginRight: 20,
              fontWeight: 'bold',
              color: 'blue',
            }}>
            {product.reviews} Reviews
          </Text>
        </View>
      </View>
      <View style={styles.cartView}>
        <Surface style={styles.surface}>
          <Text>Price: ${product.price}</Text>
          <Text>State: InStock</Text>
          <Text>Qty: ${product.price}</Text>

          <TouchableOpacity style={styles.cartButton}>
            <Text> Add to Cart </Text>
          </TouchableOpacity>
        </Surface>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 400,
    height: 100,
    //resizeMode: 'contain',
    borderRadius: 7,
  },
  imageView: {
    flex: 3,
    alignItems: 'center',
    //elevation: 10,
  },
  cartView: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  surface: {
    padding: 8,
    height: 130,
    width: 400,
    //alignItems: 'center',
    //justifyContent: 'center',
    elevation: 20,
    borderRadius: 15,
  },
  cartButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 20,
    shadowRadius: 20,
    shadowOpacity: 30,
    shadowColor: '#5283D8',
  },
});

export default ProductDetails;

{
  /* <Image style={styles.image} source={product.image} /> */
}
