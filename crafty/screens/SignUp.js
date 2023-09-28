import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function SignUp({ navigation }) {
  return (
    <View className=" w-screen h-screen bg-[f9f9f9] items-center justify-center ">
      <View className="mx-10">
        <Text className="font-bold text-4xl mb-2">Sign Up</Text>
        <TextInput
          className="mb-4 w-screen px-4 h-16 bg-white rounded-md"
          placeholder="Name"
        />
        <TextInput
          className="mb-4 w-screen h-16 px-4 bg-white rounded-md"
          placeholder="Email"
        />
        <TextInput
          className="mb-4 w-screen h-16 px-4 bg-white rounded-md"
          placeholder="Password"
        />
      </View>
      <TouchableOpacity className="flex flex-row gap-2 pl-48 items-center">
          <Text onPress={() => navigation.navigate("Login")}>
            Already have an account ?
          </Text>
          <Svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M12.01 3.00008H1C0.45 3.00008 0 3.45008 0 4.00008C0 4.55008 0.45 5.00008 1 5.00008H12.01V6.79008C12.01 7.24008 12.55 7.46008 12.86 7.14008L15.64 4.35008C15.83 4.15008 15.83 3.84008 15.64 3.64008L12.86 0.850078C12.55 0.530078 12.01 0.760078 12.01 1.20008V3.00008Z"
              fill="#BF9B7A"
            />
          </Svg>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#BF9B7A] text-white  w-96 h-12 p-2 mt-7 rounded-full items-center"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-center justify-center text-white font-bold">SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text className="mt-2">Continue without an account</Text>
      </TouchableOpacity>
    </View>
  );
}
