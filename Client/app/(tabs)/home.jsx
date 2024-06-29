import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderSection from '../../components/Home/HeaderSection'
import { Colors } from "@/constants/Colors";

export default function home() {
  return (
   
      <View>
      <View style={{
        backgroundColor: Colors.PRIMARY,
        height:100
      }}>
        <HeaderSection/>
        </View>
      </View>
    
  )
}