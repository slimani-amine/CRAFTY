import React from "react";
import { Text, ScrollView, View, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Karousel from "../components/Home/Carousel";
import Accordion from "../components/Accordion";
import ProdCard from "../components/ProdCard";


const ProductDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView >
        < Karousel className="-mt-2" />
        <TouchableOpacity
          style={{
            height: 50,
            width: Dimensions.get("window").width - 20,
            marginTop: 10,
            marginLeft: 10,
            borderRadius: 10,
            borderColor: "#ccc",
            borderWidth: 1,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <Text style={{ marginLeft: 30 }}>Message seller</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>A&C</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: Dimensions.get("window").width - 180,
            }}
          >
            $ 17.14
          </Text>
        </View>
        <Text style={{ marginLeft: 10, fontSize: 12, color: "#ccc" }}>
          Item Name
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 12, color: "yellow" }}>
          * * * *
        </Text>
        
  
        <Accordion />
         
        <View />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
