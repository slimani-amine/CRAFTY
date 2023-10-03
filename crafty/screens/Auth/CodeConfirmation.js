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

const CodeConfirmation = ({ navigation }) => {
  const inputs = "w-16 h-16 pl-3 bg-white rounded-md";
  return (
    <SafeAreaView className="flex-1 bg-[f9f9f9] items-center w-screen h-screen">
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center"
        enabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="items-center">
            <Text className="font-bold text-2xl mt-44 mr-20">
              Code Confirmation
            </Text>
            <Text className="mt-14 mb-8">
              Please, enter the code you received via email.
            </Text>
            <View className="flex flex-row gap-2 mx-1">
              <TextInput className={inputs} keyboardType="numeric" />
              <TextInput className={inputs} keyboardType="numeric" />
              <TextInput className={inputs} keyboardType="numeric" />
              <TextInput className={inputs} keyboardType="numeric" />
            </View>
            <Text className="text-red-500 ml-3 mt-5">
              Please make sure you entered the correct code.
            </Text>
            <TouchableOpacity
              className="bg-[#BF9B7A] text-white w-96 h-12 p-2 mt-7 rounded-full items-center"
              onPress={() => navigation.navigate("UpdatePassword")}
            >
              <Text className="text-center text-white font-bold">Verify</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CodeConfirmation;
