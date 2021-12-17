import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignUpScreen } from "./src/screen/SignUpScreen";
import { LoginScreen } from "./src/screen/LoginScreen";
import { VideoScreen } from "./src/screen/VideoScreen";

import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="signup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="videoscreen"
          component={VideoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
