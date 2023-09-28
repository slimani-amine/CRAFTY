import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function SignUp({ navigation }) {
  return (
    <View className=" w-full h-full bg-white items-center justify-center ">
        <Text>Sign Up</Text>
        <TextInput
      className="mb-4 w-44  border border-grey-500 rounded-md"
        placeholder="Name"
      />
      <TextInput
        className="mb-4 w-44  border border-grey-500 rounded-md"
        placeholder="Email"
      />
      <TextInput
        className="mb-4 w-44 border border-slate-500 rounded-md"
        placeholder="Password"
      />
      <TouchableOpacity 
      className="bg-[#BF9B7A] text-white p-2 rounded"
      onPress={() => navigation.navigate('SignIn')}>
        <Text className="text-center text-white">SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
