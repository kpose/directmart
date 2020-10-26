import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';

import {navigationRef} from '../navigation/Navigating';

import Product from '../components/Product';

function HomeScreen({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <Product />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails');
        }}></TouchableOpacity>
    </ScrollView>
  );
}

export default HomeScreen;
