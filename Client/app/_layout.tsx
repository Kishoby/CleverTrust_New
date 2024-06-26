
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import OnBoarding from './(routes)/onboarding';


export default function RootLayout() {

  useFonts({
    'outfit':require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-black':require('../assets/fonts/Outfit-Black.ttf'),
    'outfit-semibold':require('../assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-thin':require('../assets/fonts/Outfit-Thin.ttf'),
    'outfit-light':require('../assets/fonts/Outfit-Light.ttf'),
});

  

  const[isLoggedIn,setIsLoggedIn] = useState(false)

  return (
    <>

    {isLoggedIn?(
      <View>

      </View>

    ):
    <Stack screenOptions={{headerShown:false}}>      
      <Stack.Screen name="index"/>
      <Stack.Screen name="(routes)/welcome-intro/index" />
      <Stack.Screen name="(routes)/login/index" />  
      <Stack.Screen name="(routes)/sign-up/index" />  
      <Stack.Screen name="(tabs)" />    
    </Stack>
    }
    </>
  );
}
