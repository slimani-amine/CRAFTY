import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ArticleCard from "../ArticleCard";

const Articles = ({ navigation }) => {
  return (
    <View>
      <View className="w-screen flex flex-row p-4 items-center">
        <View className="w-full">
          <Text className="text-4xl font-bold">Articles</Text>
          <Text className="text-neutral-400 text-xs font-normal">
            Crafted with love
          </Text>
        </View>
        <View className="-left-12">
          <TouchableOpacity
            // onPress={() => navigation.navigate("ForgetPassword")}
          >
            <Text className="text-xs font-normal">View all</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className='px-4 flex flex-row items-start justify-start'>
        <ArticleCard />
        <ArticleCard />

      </View>
    </View>
  );
};

export default Articles;
