/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainIndex from './components/MainIndex';
import Contacts from './components/Contacts';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainIndex">
        <Stack.Screen name="MainIndex" component={MainIndex} 
          options={{
            title: 'ডেমো অ্যাপ',
            headerStyle: {
              backgroundColor: '#b20000',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Icon name="search" size={18} style={styles.iconPosition} />               
            ),
          }}/>
        <Stack.Screen name="Contacts" component={Contacts} 
        options={{
          title: 'কন্টাক্টস লিস্ট',
          headerStyle: {
            backgroundColor: '#b20000',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Icon name="search" size={18} style={styles.iconPosition}/> 
          )
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  iconPosition: {
    marginHorizontal: 8,
    color:"#fff",
  }
})



export default App;
