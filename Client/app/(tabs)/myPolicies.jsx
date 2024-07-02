import { View, Text } from 'react-native'
import React from 'react'
import AppIntroSlider from "react-native-app-intro-slider";
import { Colors } from '@/constants/Colors';
import PolicySlider from '../../components/MyPolicies/PolicySliders';


export default function myPolicies() {
  return (
    <View style={{
      flex:1
    }}>
      
      <PolicySlider/>
    </View>
  )
}