import { View, Text, Image } from 'react-native'
import React from 'react'
import userImg from '../../assets/images/user.png'
import { Colors } from "@/constants/Colors";

const HeaderSection = () => {
  return (
    <View style={{
        marginTop:50,
        marginHorizontal:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        
    }}>
      <View>
        <Text style={{
            fontFamily:"outfit",
            color:Colors.LIGHT
        }}>WelCome Back,</Text>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:16,
            color:'#fff'
        }}>Kishoby Gobihanath</Text>
      </View>
      <View>
        <Image source={userImg} alt='' style={{
            width:40,
            height:40,
            borderRadius:50
        }}/>
      </View>
    </View>
  )
}

export default HeaderSection