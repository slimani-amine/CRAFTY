import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { fireBaseAuth } from "../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const auth = fireBaseAuth;
  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      navigation.navigate("Home")
    } catch (error) {
      console.log(error);
    }
  }; 
  return (
    <View className=" w-full h-full bg-white items-center justify-center ">
      <View>
        <Text className="font-bold text-2xl mb-2">Login</Text>
        <TextInput
          className="mb-4 w-96 h-16 pl-3 border  border-slate-500 rounded-md"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <TextInput
          className="mb-4 w-96 h-16 border border-slate-500 rounded-md"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
        <Text className="ml-16"> Forgot your passeword ? </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
        onPress={() => login()}
      >
        <Text className="text-center text-white font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
