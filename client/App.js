import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>HTHTH</Text>
        {myIcon}
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
