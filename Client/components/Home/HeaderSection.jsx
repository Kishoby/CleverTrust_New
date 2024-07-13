import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import userImg from '../../assets/images/user.png';
import { Colors } from "@/constants/Colors";
import { auth } from '../../configs/FirebaseConfig.js'; // Adjust this import to your Firebase config
import { Link, useRouter } from "expo-router";

const HeaderSection = () => {


  //Temporary Logout
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully");
      router.replace('/(routes)/onboarding')
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  //Temporary Logout

  return (
    <View style={{
        marginTop: 50,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    }}>
      <View>
        <Text style={{
            fontFamily: "outfit",
            color: Colors.LIGHT
        }}>Welcome Back,</Text>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 16,
            color: '#fff'
        }}>Kishoby Gobihanath</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={userImg} alt='' style={{
            width: 40,
            height: 40,
            borderRadius: 50
        }}/>

    {/* Temporary Logout */}
        <TouchableOpacity
          style={{
            marginLeft: 10,
            backgroundColor: Colors.LIGHT,
            padding: 5,
            borderRadius: 5,
          }}
          onPress={handleLogout}
        >
          <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 16,
            color: Colors.PRIMARY,
          }}>
            Logout
          </Text>
        </TouchableOpacity>

        {/* Temporary Logout */}
      </View>
    </View>
  );
};

export default HeaderSection;
