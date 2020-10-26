import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

function ProductDetails({navigation, route}) {
  const {product} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ProductDetails Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Button</Text>
      </TouchableOpacity>
      <Text>{product.name}</Text>
    </View>
  );
}

export default ProductDetails;
