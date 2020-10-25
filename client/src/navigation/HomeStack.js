import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';

import {StackActions} from '@react-navigation/native';

import Home from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetails';

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
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? (
            title
          ) : (
            <MaterialCommunityIcons name="twitter" size={40} color="red" />
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
