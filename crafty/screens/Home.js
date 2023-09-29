import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Karousel from "../components/Home/Carousel";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView className="bg-[f9f9f9] justify-between items-center">
      <ScrollView>
        <Karousel />
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
