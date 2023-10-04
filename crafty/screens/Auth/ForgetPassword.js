import axios from "axios";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

export default function ForgetPassword({ navigation }) {
   const [email,setemail] = useState("")
   const sendEmail = async()=> {
    const res = await axios.post("http://192.168.11.222:4000/reset/reset-password/send",{email:email})
    console.log("🚀 ~ file: ForgetPassword.js:9 ~ sendEmail ~ res.satuts:", res.status)
   
    if(res.status===200){
    navigation.navigate("CodeConfirmation")
    }else{
      alert(res.data)
    }
   }
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
        onChangeText={(e)=>{setemail(e)}}
      />
      <TouchableOpacity 
      className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
     onPress={ sendEmail}>
        <Text className="text-center text-white font-bold">SEND</Text>
      </TouchableOpacity>
    </View>
  );
}
