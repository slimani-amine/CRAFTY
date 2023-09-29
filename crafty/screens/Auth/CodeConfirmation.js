import { View, Text, TextInput,TouchableOpacity } from "react-native";
import React from "react";

const CodeConfirmation = ({navigation}) => {
  return (
    <View className="flex flex-col w-full h-full bg-[f9f9f9] items-center">
      <Text className="font-bold text-2xl mt-44 mr-20">Code Confirmation</Text>
      <Text className="mt-14 mb-8">
        Please, enter the code you received via email.
      </Text>
      <View className="flex flex-row gap-2 mx-1">
        <TextInput className="w-16 h-16 pl-3 bg-white rounded-md " keyboardType='numeric' />
        <TextInput className="w-16 h-16 pl-3 bg-white rounded-md" keyboardType='numeric' />
        <TextInput className=" w-16 h-16  pl-3 bg-white rounded-md " keyboardType='numeric' />
        <TextInput className="w-16 h-16 pl-3 bg-white rounded-md  " keyboardType='numeric' />
      </View>
      <Text className="text-red-500 ml-3 mt-5">Please make sure you entered the correct code.</Text>
      <TouchableOpacity 
      className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
     onPress={() => navigation.navigate("UpdatePassword")}>
        <Text className="text-center text-white font-bold">Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CodeConfirmation;
