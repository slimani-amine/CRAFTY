import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { useForm, Controller } from "react-hook-form";
// import { err } from "react-native-svg/lib/typescript/xml";
import { useAuth } from "../../components/Authprovider/Authprovider";

export default function SignUp({ navigation }) {
  const inputs = "w-96 px-4 h-16 mb-3 bg-white rounded-md ";
  const inputsError = "w-96 px-4 h-16 bg-white rounded-md  ";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Email_rgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const Passwoerd_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const { onLogin, onSignUp } = useAuth();
  const register = async (data) => {
    console.log("🚀 ~ file: SignUp.js:25 ~ register ~ data:", data);
  };

  return (
    <SafeAreaView className="flex-1 bg-[f9f9f9] items-center w-screen h-screen">
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center"
        enabled
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className=" w-screen h-screen justify-center items-center ">
            <Svg className="-top-14"
              width="137"
              height="61"
              viewBox="0 0 137 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.1401 49.2201C9.30007 49.2201 7.00007 48.5001 5.24007 47.0601C3.52007 45.6601 2.26007 43.84 1.46007 41.6C0.700068 39.36 0.320068 37.02 0.320068 34.58C0.320068 31.42 0.800068 28.2401 1.76007 25.0401C2.72007 21.84 4.02007 18.8 5.66007 15.92C7.34007 13 9.24007 10.4201 11.3601 8.18005C13.4801 5.90005 15.7001 4.12005 18.0201 2.84005C20.3801 1.52005 22.7001 0.860048 24.9801 0.860048C26.6201 0.860048 27.9401 1.26005 28.9401 2.06005C29.9801 2.82005 30.5001 4.14005 30.5001 6.02005C30.5001 7.18005 30.3001 8.50005 29.9001 9.98005C29.5001 11.42 28.9601 12.8201 28.2801 14.1801C27.6001 15.5001 26.8401 16.6 26.0001 17.48C25.2001 18.36 24.3801 18.8 23.5401 18.8C23.2201 18.8 22.8801 18.7 22.5201 18.5C22.2001 18.3 21.9201 17.94 21.6801 17.42C22.2801 16.74 22.9401 15.9001 23.6601 14.9001C24.4201 13.86 25.1401 12.78 25.8201 11.66C26.5001 10.5 27.0401 9.38005 27.4401 8.30005C27.8801 7.18005 28.1001 6.20005 28.1001 5.36005C28.1001 4.56005 27.8601 3.92005 27.3801 3.44005C26.9401 2.92005 26.2001 2.66005 25.1601 2.66005C23.4401 2.66005 21.6401 3.36005 19.7601 4.76005C17.9201 6.16005 16.1201 8.04005 14.3601 10.4001C12.6401 12.72 11.0801 15.32 9.68007 18.2001C8.28007 21.0801 7.16007 24.0201 6.32007 27.0201C5.52007 30.0201 5.12007 32.88 5.12007 35.6C5.12007 37.56 5.40007 39.44 5.96007 41.24C6.52007 43 7.42007 44.42 8.66007 45.5C9.94007 46.62 11.5801 47.18 13.5801 47.18C15.7001 47.18 17.8001 46.5801 19.8801 45.3801C22.0001 44.1801 23.9401 42.6 25.7001 40.64C27.4601 38.68 28.8601 36.56 29.9001 34.28L30.7401 34.8801C29.4201 37.4801 27.8201 39.88 25.9401 42.08C24.0601 44.24 21.9601 45.9601 19.6401 47.2401C17.3201 48.5601 14.8201 49.2201 12.1401 49.2201Z"
                fill="#8C633F"
              />
              <Path
                d="M39.0285 45.5601C37.6685 45.5601 36.5885 45.2 35.7885 44.48C35.0285 43.76 34.6485 42.82 34.6485 41.66C34.6485 40.46 34.9285 39.2001 35.4885 37.8801C36.0485 36.5601 36.5885 35.26 37.1085 33.98C37.6685 32.66 37.9485 31.48 37.9485 30.44C37.9485 29.16 37.5685 28.22 36.8085 27.62C36.0885 26.98 35.3485 26.4 34.5885 25.88C33.6685 28.24 32.7085 30.48 31.7085 32.6C30.7085 34.72 29.8885 36.32 29.2485 37.4L28.7085 36.3801C29.2685 35.3401 29.9885 33.82 30.8685 31.82C31.7885 29.82 32.6885 27.54 33.5685 24.98C33.1685 24.58 32.9685 24.1 32.9685 23.54C32.9685 22.34 33.3085 21.36 33.9885 20.6C34.6685 19.84 35.1685 19.46 35.4885 19.46C35.9285 19.46 36.1685 19.6601 36.2085 20.0601C36.2885 20.4201 36.3285 20.7001 36.3285 20.9001C36.3285 21.1001 36.2085 21.5 35.9685 22.1C35.7685 22.66 35.6685 23 35.6685 23.12C35.6685 23.68 35.9685 24.2001 36.5685 24.68C37.2085 25.1201 37.9285 25.64 38.7285 26.24C39.5285 26.8 40.2285 27.5 40.8285 28.34C41.4685 29.14 41.7885 30.18 41.7885 31.46C41.7885 32.66 41.5285 33.88 41.0085 35.12C40.5285 36.36 40.0285 37.54 39.5085 38.66C39.0285 39.78 38.7885 40.76 38.7885 41.6C38.7885 42.32 38.9685 42.8001 39.3285 43.0401C39.6885 43.2801 40.1085 43.4001 40.5885 43.4001C41.5485 43.4001 42.5285 43.1 43.5285 42.5C44.5685 41.9 45.5685 41.1401 46.5285 40.2201C47.4885 39.3001 48.3485 38.34 49.1085 37.34C49.8685 36.3 50.4285 35.34 50.7885 34.46L51.5685 35.0601C50.8085 36.7401 49.7685 38.4001 48.4485 40.0401C47.1285 41.6401 45.6485 42.96 44.0085 44C42.4085 45.04 40.7485 45.5601 39.0285 45.5601Z"
                fill="#8C633F"
              />
              <Path
                d="M52.3879 46.82C51.1479 46.82 50.1079 46.4001 49.2679 45.5601C48.3879 44.7601 47.9479 43.52 47.9479 41.84C47.9479 40.4 48.2679 38.8601 48.9079 37.2201C49.5479 35.5401 50.4279 33.9 51.5479 32.3C52.6679 30.66 53.9279 29.18 55.3279 27.86C56.7679 26.5 58.2679 25.42 59.8279 24.62C61.4279 23.82 63.0079 23.42 64.5679 23.42C66.1279 23.42 67.4279 23.84 68.4679 24.68C69.5079 25.4801 70.0279 26.56 70.0279 27.92C70.0279 28.92 69.7479 29.6 69.1879 29.96C68.6679 30.32 67.9679 30.5 67.0879 30.5C67.1679 30.18 67.2279 29.84 67.2679 29.48C67.3479 29.08 67.3879 28.72 67.3879 28.4C67.3879 27.48 67.1679 26.7 66.7279 26.06C66.2879 25.38 65.5279 25.0401 64.4479 25.0401C63.3279 25.0401 62.1879 25.44 61.0279 26.24C59.8679 27 58.7479 28.0401 57.6679 29.3601C56.5879 30.6401 55.6279 32.04 54.7879 33.56C53.9479 35.08 53.2879 36.5801 52.8079 38.0601C52.3279 39.5401 52.0879 40.86 52.0879 42.0201C52.0879 43.58 52.6279 44.3601 53.7079 44.3601C54.6279 44.3601 55.6279 43.94 56.7079 43.1C57.7879 42.22 58.8879 41.12 60.0079 39.8C61.1679 38.44 62.2679 37.04 63.3079 35.6C64.3479 34.16 65.2679 32.84 66.0679 31.64C66.2279 31.4 66.3279 31.28 66.3679 31.28C66.6079 31.32 66.9079 31.4 67.2679 31.5201C67.6679 31.64 68.0079 31.8 68.2879 32C68.5679 32.2 68.7079 32.46 68.7079 32.78C68.7079 33.14 68.5279 33.64 68.1679 34.28C67.8079 34.88 67.4079 35.5801 66.9679 36.3801C66.5279 37.1801 66.1279 38 65.7679 38.84C65.4079 39.64 65.2279 40.4 65.2279 41.12C65.2279 41.72 65.3879 42.32 65.7079 42.92C66.0279 43.48 66.5479 43.76 67.2679 43.76C68.3479 43.76 69.7679 42.98 71.5279 41.42C73.2879 39.82 75.0679 37.44 76.8679 34.28L77.4679 34.8801C76.6279 37.0401 75.5479 38.94 74.2279 40.58C72.9079 42.22 71.4879 43.5 69.9679 44.42C68.4879 45.34 67.0279 45.8 65.5879 45.8C64.1079 45.8 63.0079 45.36 62.2879 44.48C61.6079 43.6 61.2679 42.64 61.2679 41.6C61.2679 41.36 61.2879 41.1 61.3279 40.82C61.3679 40.5 61.4079 40.1801 61.4479 39.8601C59.7279 42.1801 58.1479 43.9201 56.7079 45.0801C55.3079 46.2401 53.8679 46.82 52.3879 46.82Z"
                fill="#8C633F"
              />
              <Path
                d="M74.8607 60.8001C74.4607 60.8001 74.0007 60.66 73.4807 60.38C72.9607 60.14 72.5207 59.64 72.1607 58.88C71.7607 58.12 71.5607 57 71.5607 55.52C71.5607 53.76 71.8607 51.46 72.4607 48.62C73.0607 45.82 73.8807 42.72 74.9207 39.32C75.9607 35.92 77.1607 32.4401 78.5207 28.8801C79.8807 25.2801 81.3407 21.82 82.9007 18.5C84.5007 15.14 86.1207 12.14 87.7607 9.50005C89.4407 6.82005 91.0807 4.70005 92.6807 3.14005C94.2807 1.58005 95.8007 0.800049 97.2407 0.800049C98.0807 0.800049 98.6207 1.06005 98.8607 1.58005C99.1407 2.10005 99.2807 2.72005 99.2807 3.44005C99.2807 5.16005 98.8007 7.04005 97.8407 9.08005C96.9207 11.12 95.6807 13.18 94.1207 15.26C92.5607 17.3 90.8407 19.26 88.9607 21.14C87.0807 22.98 85.1807 24.56 83.2607 25.88C83.0607 26.36 82.8607 26.8601 82.6607 27.3801C82.5007 27.8601 82.3207 28.3601 82.1207 28.8801C82.5607 28.9601 82.9007 29.2 83.1407 29.6C83.4207 29.96 83.5807 30.36 83.6207 30.8C83.9007 32.6 84.2007 34.22 84.5207 35.66C84.8407 37.06 85.3207 38.16 85.9607 38.96C86.6407 39.76 87.6007 40.16 88.8407 40.16C90.2407 40.16 91.4207 39.66 92.3807 38.66C93.3407 37.62 94.3807 36.16 95.5007 34.28L96.4007 34.8801C95.4007 37.2801 94.1207 39.02 92.5607 40.1C91.0407 41.18 89.7007 41.7201 88.5407 41.7201C87.8207 41.7201 87.0607 41.54 86.2607 41.18C85.5007 40.82 84.7807 40.3401 84.1007 39.7401C84.1007 42.2601 83.8207 44.7601 83.2607 47.2401C82.7407 49.7201 82.0407 51.9801 81.1607 54.0201C80.2807 56.0601 79.3007 57.7001 78.2207 58.9401C77.1407 60.1801 76.0207 60.8001 74.8607 60.8001ZM76.4207 57.92C76.8607 57.92 77.3607 57.5201 77.9207 56.7201C78.4807 55.9201 79.0207 54.8601 79.5407 53.5401C80.1007 52.2601 80.6007 50.84 81.0407 49.28C81.4807 47.72 81.8407 46.16 82.1207 44.6C82.4007 43.04 82.5407 41.6401 82.5407 40.4001C82.5407 39.1601 82.3807 38.0401 82.0607 37.0401C81.7407 36.0001 81.2207 34.7801 80.5007 33.3801C79.5007 36.3801 78.6007 39.28 77.8007 42.08C77.0007 44.88 76.3807 47.4 75.9407 49.64C75.5007 51.88 75.2807 53.6801 75.2807 55.0401C75.2807 56.9601 75.6607 57.92 76.4207 57.92ZM84.2207 23.42C86.8207 21.02 89.0607 18.62 90.9407 16.22C92.8607 13.78 94.3407 11.62 95.3807 9.74005C96.4207 7.82005 96.9407 6.46005 96.9407 5.66005C96.9407 5.10005 96.6607 4.82005 96.1007 4.82005C95.0607 4.82005 93.8807 5.68005 92.5607 7.40005C91.2407 9.08005 89.8607 11.32 88.4207 14.12C86.9807 16.92 85.5807 20.02 84.2207 23.42Z"
                fill="#8C633F"
              />
              <Path
                d="M99.4321 46.7601C97.7121 46.7601 96.3921 46.26 95.4721 45.26C94.5521 44.26 94.0921 42.78 94.0921 40.82C94.0921 39.06 94.4121 36.9001 95.0521 34.34C95.7321 31.74 96.5721 29.08 97.5721 26.3601C97.1721 26.2801 96.7921 26.2201 96.4321 26.18C96.0721 26.1 95.7321 26 95.4121 25.88V24.8C95.7321 24.84 96.1121 24.88 96.5521 24.92C96.9921 24.96 97.4921 25.0001 98.0521 25.0401C98.8921 22.8801 99.7921 20.8 100.752 18.8C101.712 16.76 102.652 14.96 103.572 13.4C104.532 11.8 105.432 10.54 106.272 9.62005C107.152 8.66005 107.892 8.18005 108.492 8.18005C108.812 8.18005 109.092 8.30005 109.332 8.54005C109.612 8.74005 109.752 9.06005 109.752 9.50005C109.752 10.18 109.332 11.3 108.492 12.86C107.652 14.38 106.612 16.2 105.372 18.32C104.132 20.44 102.932 22.74 101.772 25.22C102.132 25.22 102.492 25.22 102.852 25.22C103.252 25.22 103.632 25.22 103.992 25.22C105.312 25.22 106.692 25.2 108.132 25.16C109.612 25.12 111.092 25.02 112.572 24.8601V25.94C110.372 26.18 108.392 26.36 106.632 26.48C104.912 26.6 103.372 26.66 102.012 26.66C101.852 26.66 101.692 26.66 101.532 26.66C101.412 26.66 101.272 26.66 101.112 26.66C100.192 28.78 99.4121 30.9601 98.7721 33.2001C98.1321 35.4401 97.8121 37.6201 97.8121 39.7401C97.8121 41.4601 98.0721 42.7 98.5921 43.46C99.1121 44.18 99.9721 44.5401 101.172 44.5401C103.252 44.5401 105.292 43.62 107.292 41.78C109.292 39.94 111.052 37.44 112.572 34.28L113.352 34.8801C112.392 37.1201 111.172 39.14 109.692 40.94C108.252 42.74 106.652 44.1601 104.892 45.2001C103.132 46.2401 101.312 46.7601 99.4321 46.7601Z"
                fill="#8C633F"
              />
              <Path
                d="M114.021 60.8001C113.021 60.8001 112.141 60.52 111.381 59.96C110.621 59.44 110.241 58.6601 110.241 57.6201C110.241 56.3401 110.561 55.2 111.201 54.2C111.841 53.2 112.701 52.28 113.781 51.44C114.861 50.6 116.101 49.8001 117.501 49.0401C118.901 48.2801 120.361 47.5201 121.881 46.7601C122.441 45.2801 123.001 43.64 123.561 41.84C124.161 40 124.721 37.98 125.241 35.78C123.961 37.86 122.581 39.66 121.101 41.18C119.661 42.66 118.121 43.4001 116.481 43.4001C115.721 43.4001 114.961 43.24 114.201 42.92C113.481 42.56 112.881 42.02 112.401 41.3C111.921 40.58 111.681 39.6601 111.681 38.5401C111.681 37.4201 111.861 36.12 112.221 34.64C112.621 33.16 113.101 31.72 113.661 30.32C114.221 28.92 114.801 27.76 115.401 26.84C116.001 25.92 116.521 25.46 116.961 25.46C117.121 25.46 117.401 25.52 117.801 25.64C118.241 25.76 118.641 25.9401 119.001 26.18C119.401 26.38 119.601 26.6 119.601 26.84C119.241 27.3601 118.841 28.1 118.401 29.06C117.961 30.02 117.521 31.1 117.081 32.3C116.681 33.46 116.341 34.6001 116.061 35.7201C115.781 36.8401 115.641 37.8 115.641 38.6C115.641 39.32 115.801 39.9 116.121 40.34C116.441 40.78 117.001 41 117.801 41C118.561 41 119.401 40.64 120.321 39.92C121.281 39.16 122.221 38.2001 123.141 37.0401C124.101 35.8801 124.981 34.64 125.781 33.32C125.901 32.88 126.001 32.44 126.081 32C126.201 31.52 126.301 31.0401 126.381 30.5601C126.501 30.0001 126.781 29.36 127.221 28.64C127.701 27.88 128.441 27.5 129.441 27.5C129.641 27.5 129.841 27.52 130.041 27.56C130.241 27.56 130.461 27.6 130.701 27.68C130.701 28.3201 130.501 29.52 130.101 31.28C129.741 33 129.201 35.02 128.481 37.34C127.801 39.66 126.981 42.04 126.021 44.48C127.901 43.76 129.741 42.58 131.541 40.94C133.341 39.26 134.801 37.04 135.921 34.28L136.701 34.8801C136.101 36.8001 135.181 38.48 133.941 39.92C132.741 41.32 131.381 42.5401 129.861 43.5801C128.341 44.5801 126.841 45.42 125.361 46.1C124.321 48.66 123.181 51.0601 121.941 53.3001C120.741 55.5401 119.461 57.34 118.101 58.7C116.781 60.1 115.421 60.8001 114.021 60.8001ZM113.721 58.88C114.321 58.88 115.321 58.0801 116.721 56.4801C118.161 54.9201 119.681 52.1601 121.281 48.2001C119.641 49.0801 118.121 49.94 116.721 50.78C115.321 51.66 114.201 52.6 113.361 53.6C112.521 54.6 112.101 55.7601 112.101 57.0801C112.101 57.4001 112.221 57.7801 112.461 58.2201C112.701 58.6601 113.121 58.88 113.721 58.88Z"
                fill="#8C633F"
              />
            </Svg>
          </View>
        </TouchableWithoutFeedback>
        <View className="-mt-40 -top-44 items-center justify-center w-full">
          <View className="">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Text className="font-bold pointer-events-none text-4xl mb-2">
                Sign Up
              </Text>
            </TouchableWithoutFeedback>

            <Controller
              control={control}
              name="Name"
              rules={{
                required: { value: true, message: "name is required" },
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  className={inputs}
                  placeholder={"Name"}
                />
              )}
            />

            {/* <Controller
                control={control}
                name="LastName"
                rules={{ required: { value: true, message: "last name is required" } }}
                render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (<> <TextInput value={value} onChangeText={onChange} onBlur={onBlur} className={inputs} placeholder={"Last Name"}  />
                  {error && <Text className="text-red-600">{error}</Text>}</>)} /> */}

            <Controller
              control={control}
              name="Email"
              rules={{
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: Email_rgex,
                  message:
                    " Invalid email address. Please enter a valid email.",
                },
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  className={inputs}
                  placeholder={"Email"}
                />
              )}
            />

            <Controller
              control={control}
              name="Password"
              rules={{
                required: { value: true, message: "Password  is required" },
                pattern: {
                  value: Passwoerd_regex,
                  message:
                    "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.",
                },
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  className={inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                />
              )}
            />
          </View>
          <TouchableOpacity className="flex pt-4 flex-row gap-2 pl-44 items-center">
            <Text
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
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
            className="bg-[#BF9B7A] text-white  w-96 h-12 px-2 mt-4 rounded-full justify-center items-center"
            onPress={() => {
              handleSubmit(register);
            }}
          >
            <Text className="text-center justify-center text-white font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="mt-4">Continue without an account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
