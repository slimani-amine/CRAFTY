import * as React from "react";
import { ActivityIndicator } from "react-native";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function Karousel() {

  const Images = [
"https://i.etsystatic.com/40226929/r/il/7c0bac/4711971257/il_794xN.4711971257_l2e1.jpg",
"https://i.etsystatic.com/40226929/r/il/c562f2/4711983671/il_794xN.4711983671_i0tp.jpg",
"https://i.etsystatic.com/40226929/r/il/8b4f27/4711984039/il_794xN.4711984039_8w7g.jpg",
"https://i.etsystatic.com/40226929/r/il/cf677c/4663739596/il_794xN.4663739596_quva.jpg"
  ]


  const width = Dimensions.get("window").width;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width}
        autoPlay={true}
        data={Images}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) =>{} }
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="small"/>
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Karousel;
