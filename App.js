import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen } from './src/screen/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
  </Stack.Navigator>
   </NavigationContainer>
  );
}
