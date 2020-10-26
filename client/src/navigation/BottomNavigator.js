import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './HomeStack';
import Cart from '../screens/Cart';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      shifting={true}
      activeColor="#f0edf6"
      inactiveColor="#000"
      style={{backgroundColor: 'tomato'}}
      sceneAnimationEnabled={false}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: 'shopping',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: 'cart-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
