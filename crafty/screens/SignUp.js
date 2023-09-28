import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function SignUp({ navigation }) {
  return (
    <View className=" w-full h-full bg-white items-center justify-center ">
        <Text>Sign Up</Text>
        <TextInput
      className="mb-4 w-44  border border-grey-500 rounded-md"
        placeholder="Name"
      />
      <TextInput
        className="mb-4 w-96 h-16  border  border-slate-500 rounded-md"
        placeholder="Email"
      />
      <TextInput
        className="mb-4 w-96 h-16 border border-slate-500 rounded-md"
        placeholder="Password"
      />
      <TouchableOpacity>
      <Text className="ml-12"> Already have an account ? </Text>
      <AntDesign title="hello"/>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text className="text-center text-white font-bold">SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
