import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

function Cart({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cart Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Cart;
