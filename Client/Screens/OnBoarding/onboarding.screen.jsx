import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors.ts";
import Logo from '../../assets/images/Logo1.png'
import { router } from 'expo-router';

const OnBoardingScreen= () => {
  return (
    <View style={{
      backgroundColor:Colors.PRIMARY,
      width:'100%',
      height:"100%"
    }}>

        <View style={{
            display:'flex',
            alignItems: 'center',
            marginRight:10,
            marginTop:130,

        }}>
      
        <Image source={Logo}
        style={{
            width:380,
            height:450,
            alignItems: 'center'
            
            
        }}
        />

       </View>

       <TouchableOpacity style={{
          backgroundColor: Colors.LIGHT,
          padding: 10,
          marginTop: 30,
          marginHorizontal:40,
          borderRadius: 30
        }}
        onPress={()=>router.push('/(routes)/welcome-intro')}
        >
          <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            textAlign: "center",
            color: Colors.PRIMARY,
          }}>Gets Started</Text>
        </TouchableOpacity>


    </View>
  )
}
  
export default OnBoardingScreen