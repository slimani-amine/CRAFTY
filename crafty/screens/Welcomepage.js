import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
const Logoimg = require("../assets/crafty.gif");

const Welcomepage = ({ navigation }) => {
  return (
    <View className="w-full h-full items-center justify-center bg-white">
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image className="scale-50 pt-60" source={Logoimg} /> 

      </TouchableOpacity>
    </View>
  );
};

export default Welcomepage;
