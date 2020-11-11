import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {navigationRef} from './src/navigation/Navigating';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
};

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  //colors: {...PaperDarkTheme.colors, ...NavigationDarkTheme.colors},
};

//const myIcon = <Icon name="rocket" size={30} color="#900" />;

const App = () => {
  //const [isDarkTheme, setIsDarkTheme] = useState(false);

  //const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme; // Use Light/Dark theme based on a state

  /* const toggleTheme = () => {
    // We will pass this function to Drawer and invoke it on theme switch press
    setIsDarkTheme((isDark) => !isDark);
  }; */

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer ref={navigationRef}>
          <DrawerNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
