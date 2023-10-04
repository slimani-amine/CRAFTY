import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgetPassword({ navigation }) {
  const inputs = "w-96 px-4 h-16 bg-white rounded-md";
  return (
    <SafeAreaView className="flex-1 bg-[f9f9f9]  ">
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center"
        enabled
      >
        <View className="-top-8  items-start px-4 justify-center">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Text className="font-bold text-4xl mb-20 ">Forgot Password</Text>
            <View className="flex flex-row mb-4 ml-2">
              <Text>
                Please, enter your email address. We will send you a
                verification code.
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TextInput className={inputs} placeholder="Email" />
          <TouchableOpacity
            className="bg-[#BF9B7A] justify-center text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
            onPress={() => navigation.navigate("CodeConfirmation")}
          >
            <Text className="text-center text-white font-bold">Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
