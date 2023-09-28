import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "./screens/Welcomepage";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import CodeConfirmation from "./screens/CodeConfirmation";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcomepage">
        <Stack.Screen name="Welcomepage" component={Welcomepage} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}  />
        <Stack.Screen name="CodeConfirmation" component={CodeConfirmation}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
