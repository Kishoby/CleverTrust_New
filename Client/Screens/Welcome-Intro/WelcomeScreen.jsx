import { View, Text,Image } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from "react-native-app-intro-slider";
import { Colors } from '@/constants/Colors';
import LoginScreen from '../Auth/Login/Login'


const slides = [
    {
      id: 1,
      title: 'Your security is our priority',
      description: '“In today’s digital world, we understand that your personal and financial information must be protected with the highest level of security. At Clever Trust Insurance, we use advanced encryption and stringent privacy measures to ensure that your data remains safe and confidential. You can trust us to keep your information secure, giving you peace of mind as you manage your insurance needs."',
      image: require('../../assets/images/onboarding_1.png')
    },
    {
      id: 2,
      title: 'Plan today for a worry-free tomorrow',
      description: '“Ensure your peace of mind by preparing for the future now. You can easily access and customize insurance plans that fit your lifestyle and protect what matters most. Start today and take the first step towards a secure and worry-free tomorrow. "',
      image: require('../../assets/images/onboarding_2.png')
    },
    {
      id: 3,
      title: 'Ready to secure your future?',
      description: '“Embark on your journey to financial security with Clever Trust Insurance. Our user-friendly app makes it simple to explore and select insurance plans tailored to your needs. With just a few taps, you can protect your future and enjoy the peace of mind that comes with comprehensive coverage. Let’s take the first step together—get started now! "',
      image: require('../../assets/images/onboarding_3.png')
    }
  ]
  

const OnBoardingSlides = () => {

    const[showLoginPage,setShowLoginPage]=useState(false)

    const buttonLabel=(label)=>{
        return(
            <View style={{
                padding:15,
                
            }}>
                <Text style={{
                    fontFamily:"outfit-medium",
                    fontSize:15
                }}>
                    {label}
                </Text>
            </View>
        )
    }
    
    if(!showLoginPage){
        return(
            <AppIntroSlider
                data={slides}
                renderItem={({item}) => {
                    return(
                        <View style={{
                            marginTop:50
                        }}>
                            <Image
                                source={item.image}
                                style={{
                                    width:400,
                                    height:400,
                                }}
                                resizeMode='contain'
                            />
                            <Text style={{
                                fontFamily:'outfit-bold',
                                fontSize:22,
                                alignItems:'center',
                                textAlign:"center"
                            }}>
                                {item.title}
                            </Text>
                            <Text  style={{
                                fontFamily:'outfit-light',
                                fontSize:14,
                                alignItems:'center',
                                textAlign:"center",
                                marginTop:20,
                                marginHorizontal:10
                            }}>
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
                activeDotStyle={{
                    backgroundColor:Colors.PRIMARY,
                    width:30
                }}
                showSkipButton
                renderNextButton={()=>buttonLabel("Next")}
                renderSkipButton={()=>buttonLabel("Skip")}
                renderDoneButton={()=>buttonLabel("Get In")}
                onDone={()=>{setShowLoginPage(true)
                }}
            />
        )
    }
  return (
    <LoginScreen/>
  )
}

export default OnBoardingSlides