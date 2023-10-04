import Fresh from "../components/Home/Fresh";
import { View, Text } from "react-native";
import React from "react";
import Karousel from "../components/Home/Carousel";
import { ScrollView } from "react-native-gesture-handler";
import Recent from "../components/Home/Recent";
import Articles from "../components/Home/Articles";

const Home = () => {
  return (
    <View className="bg-[f9f9f9] justify-between items-center">
      <ScrollView>
        <Karousel />
        <Fresh />
        <Recent />
        <View className="pb-6"></View>
        <Articles />
        <View className="pb-40"></View>
      </ScrollView>
    </View>
  );
};
export default Home;
