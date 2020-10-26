import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';

import Home from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetails';
//import Product from '../components/Product'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: '#f0f0f0'}}}>
      {previous ? (
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
          //color={theme.colors.primary}
          color="red"
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <MaterialCommunityIcons
            name="sort-variant-lock-open"
            color="#40a37a"
            size={40}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? (
            title
          ) : (
            <Avatar.Image size={40} source={require('../assets/logo.png')} />
          )
        }
      />
    </Appbar.Header>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'DirectMart'}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerTitle: 'Details'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
