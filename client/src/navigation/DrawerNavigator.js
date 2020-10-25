import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from './DrawerContent';

import HomeStack from '../navigation/HomeStack';
import BottomNavigator from '../navigation/BottomNavigator';

const Drawer = createDrawerNavigator();

/* function DrawerContent() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Drawer content</Text>
    </View>
  );
} */

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={BottomNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
