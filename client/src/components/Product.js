import * as React from 'react';
import {Surface, Text} from 'react-native-paper';
import {StyleSheet, Dimensions, Image, View} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const width = Math.round(screenWidth / 2.3);
const height = Math.round(screenHeight / 3.3);

const Product = () => (
  <Surface style={styles.surface}>
    <Image style={styles.productImage} source={require('../assets/p1.jpg')} />
    <View style={styles.productDetails}>
      <Text> Shirts </Text>
      <Text> Gucci </Text>
      <Text> $500 </Text>
    </View>
  </Surface>
);

export default Product;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: height,
    marginTop: 5,
    marginLeft: 5,
    width: width,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
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
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    //marginTop: 10,
  },
});
