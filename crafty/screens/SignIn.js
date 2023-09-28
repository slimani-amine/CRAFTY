import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function SignIn() {

  return (
    <View className=" items-center justify-center bg-white">
     <Text>Sign In</Text>
      <TextInput
      className="mb-4 w-44  border border-grey-500 rounded-md"
        placeholder="Email"
      />
      <TextInput
      className="mb-4 w-44 border border-slate-500 rounded-md"
        placeholder="Password"
      />
      <TouchableOpacity className="bg-pink-500 text-white p-2 rounded" >
        <Text className="text-center text-white">SignIn</Text>
      </TouchableOpacity>
    </View>
  );

} 
