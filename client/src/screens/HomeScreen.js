import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails');
        }}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
