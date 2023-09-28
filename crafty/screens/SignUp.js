import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function SignUp({ navigation }) {
  return (
    <View className=" w-full h-full bg-white items-center justify-center ">
      <View>
        <Text className="font-bold text-2xl mb-2">Sign Up</Text>
        <TextInput
          className="mb-4 w-96 h-16 border  border-slate-500 rounded-md"
          placeholder="Name"
        />
        <TextInput
          className="mb-4 w-96 h-16 pl-3 border  border-slate-500 rounded-md"
          placeholder="Email"
        />
        <TextInput
          className="mb-4 w-96 h-16 border border-slate-500 rounded-md"
          placeholder="Password"
        />
      </View>
      <TouchableOpacity>
        <Text className="ml-16" onPress={() => navigation.navigate("Login")}>
          Already have an account ?
        </Text>

      </TouchableOpacity>
      
      <TouchableOpacity
        className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-center text-white font-bold">SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text 
        className="mt-2">
      
          Continue without an account
        </Text>
      </TouchableOpacity>
    </View>
  );
}
