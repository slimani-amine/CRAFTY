import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const UpdatePassword = ({ navigation }) => {
  return (
    <View className="flex flex-col w-full h-full bg-[f9f9f9] items-center justify-center">
      <View>
        <Text className="font-bold text-2xl mb-20">Update Password</Text>
        <Text className="mb-3"> Please update your password.</Text>

        <TextInput
          className="mb-4 w-96 h-16 pl-3 bg-white rounded-md"
          placeholder="New password"   
        />
        <TextInput
          className="mb-4 w-96 h-16 pl-3 bg-white rounded-md"
          placeholder="Confirm Password"
        />
      </View>

      <TouchableOpacity
        className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-14 rounded-full items-center"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-center text-white font-bold">Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdatePassword;
