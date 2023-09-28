import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "./screens/Welcomepage";
import SignUp from "./screens/SignUp";

import Login from "./screens/Login";



import Home from "./screens/Home";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcomepage">
        <Stack.Screen name="Welcomepage" component={Welcomepage} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
