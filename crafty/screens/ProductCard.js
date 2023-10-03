import { ScrollView, View} from 'react-native'
import React from 'react'
import Svg, { G, Circle, Path, Defs, Filter, FeFlood } from 'react-native-svg';
import { SafeAreaView } from "react-native-safe-area-context";
import Karousel from "../components/Home/Carousel";



const ProductCard = () => {
  return (
    <SafeAreaView className="bg-[f9f9f9] justify-between items-center">
    <ScrollView>
      <Karousel />
    </ScrollView>
  </SafeAreaView>
  )
}

export default ProductCard

