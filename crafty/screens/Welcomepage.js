import { View, Image,TouchableOpacity  } from 'react-native'
import React from 'react'
const Logoimg=require('../assets/crafty.png')

const Welcomepage = ({ navigation }) => {
  return (
    <View className="w-full h-full bg-white">
        <TouchableOpacity
      onPress={() => navigation.navigate('SignUp')}>
      < Image 
      className=" w-full h-96 mt-60 "
      source={Logoimg} />
      
      </TouchableOpacity>
    </View>
  )
}

export default Welcomepage