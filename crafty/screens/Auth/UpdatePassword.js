import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const UpdatePassword = ({ navigation }) => {
  const inputs = "mb-4 w-96 h-16 pl-3 bg-white rounded-md";
  return (
    <SafeAreaView className="flex-1 bg-[f9f9f9] items-center w-screen h-screen">
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center"
        enabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className=" items-center justify-center">
            <View>
              <Text className="font-bold text-2xl mb-20">Update Password</Text>
              <Text className="mb-3"> Please update your password.</Text>

              <TextInput className={inputs} placeholder="New password" />
              <TextInput className={inputs} placeholder="Confirm Password" />
            </View>

            <TouchableOpacity
              className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-14 rounded-full items-center"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-center text-white font-bold">Update</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UpdatePassword;
