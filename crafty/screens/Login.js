import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";


export default function SignUp({ navigation }) {
  return (
    <View className="flex flex-col w-full h-full bg-[f9f9f9] items-center justify-center ">
      <View>
        <Text className="font-bold text-2xl mb-2">Login</Text>
     
      <TextInput
        className="mb-4 w-96 h-16 pl-3 bg-white rounded-md"
        placeholder="Email"
      />
      <TextInput
        className="mb-4 w-96 h-16 pl-3 bg-white rounded-md"
        placeholder="Password"
      />
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate("ForgetPassword")}>
      <Text className="ml-16"> Forgot your passeword ? </Text>
      
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
        onPress={()=>navigation.navigate("Home")}
      >
        <Text className="text-center text-white font-bold">Login</Text>
      </TouchableOpacity>

    </View>
  );
}
