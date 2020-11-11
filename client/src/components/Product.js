import React, {useState, useEffect} from 'react';
import {Surface, Text} from 'react-native-paper';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const width = Math.round(screenWidth / 2.3);
const height = Math.round(screenHeight / 3.3);

import * as RootNavigation from '../navigation/Navigating';
import {listProducts} from '../redux/actions/productActions';

export default function Product(props) {
  //const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  const {products, error, loading} = productList;
  const dispatch = useDispatch();

  /* const fetchData = async () => {
    try {
      let response = await fetch('http://127.0.0.1:5000/api/products');
      let data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }; */

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return loading ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : error ? (
    console.log(error)
  ) : (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          onPress={() => RootNavigation.navigate('ProductDetails', {product})}>
          <Surface style={styles.surface}>
            <Image style={styles.productImage} /* source={product.image} */ />
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
}

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
