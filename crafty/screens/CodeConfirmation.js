import { View, Text, TextInput } from "react-native";
import React from "react";

const CodeConfirmation = () => {
  return (
    <View className="flex flex-col w-full h-full bg-[f9f9f9] items-center">
      <Text className="font-bold text-2xl mt-44 mr-20">Code Confirmation</Text>
      <Text className="mt-14 mb-8">
        Please, enter the code you received via email.
      </Text>
      <View className="flex flex-row gap-2 mx-1">
        <TextInput className="w-20 h-20 pl-3 bg-white rounded-md" />
        <TextInput className=" w-20 h-20  pl-3 bg-white rounded-md" />
        <TextInput className=" w-20 h-20  pl-3 bg-white rounded-md" />
        <TextInput className="w-20 h-20  pl-3 bg-white rounded-md" />
      </View>
      <Text className="text-red-500 ml-2">Please make sure you entered the correct code.</Text>
    </View>
  );
};

export default CodeConfirmation;
