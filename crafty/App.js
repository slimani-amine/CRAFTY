import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcomepage from "./screens/Welcomepage";
import SignUp from "./screens/Auth/SignUp";
import Home from "./screens/Home";
import Login from "./screens/Auth/Login";
import ForgetPassword from "./screens/Auth/ForgetPassword";
import CodeConfirmation from "./screens/Auth/CodeConfirmation";
import UpdatePassword from "./screens/Auth/UpdatePassword";
import { User, onAuthStateChanged } from "firebase/auth";
import { fireBaseAuth } from "./firebaseconfig";
const Stack = createStackNavigator();
const InsideStack = createStackNavigator();
function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* ken bech tzidou screens o5rin zidohom houni  */}
    </InsideStack.Navigator>
  );
}
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(fireBaseAuth, (user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcomepage">
        <Stack.Screen
          name="Welcomepage"
          component={Welcomepage}
          options={{ headerShown: false }}
        />
        {user ? (
          <Stack.Screen name="InsideLayout" component={InsideLayout} />
        ) : (
          <>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen
              name="CodeConfirmation"
              component={CodeConfirmation}
            />
            <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
