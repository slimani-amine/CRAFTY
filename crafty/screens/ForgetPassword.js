import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default function ForgetPassword({ navigation }) {
  return (
    <View className="flex flex-col w-full h-full bg-[f9f9f9] items-center justify-center">
      <Text className="font-bold text-2xl mb-20 ">Forgot Password</Text>
      <View className="flex flex-row mb-4 ml-2">
        <Text>
          Please, enter your email address. We will send you a verification
          code.
        </Text>
      </View>
      <TextInput
        className="mb-4 w-96 h-16 pl-3 bg-white rounded-md"
        placeholder="Email"
      />
      <TouchableOpacity 
      className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
     onPress={() => navigation.navigate("CodeConfirmation")}>
        <Text className="text-center text-white font-bold">SEND</Text>
      </TouchableOpacity>
    </View>
  );
}
