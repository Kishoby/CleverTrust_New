import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from "@/constants/Colors";
import { auth } from '../../configs/FirebaseConfig.js'; // Adjust this import to your Firebase config
import { Link, useRouter } from "expo-router";

const HeaderSection = () => {

  // Temporary Logout
  const router = useRouter();

  const handleLogout = () => {
    auth.signOut().then(() => {
      router.replace('/login'); // Adjust this route as necessary
    }).catch(error => {
      console.error("Error logging out: ", error);
    });
  };

  const userImgUrl = 'https://lh3.googleusercontent.com/a/ACg8ocIvqHMU518dBDTOo7yNbXPSso6UgnoQANv3_ZpXF5IDjCKTZX_v=s360-c-no'; // Replace with your URL

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
            color:"#FDB157"
        }}>Welcome Back,</Text>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 16,
            color: '#fff'
        }}>Gobihanath B</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={handleLogout}>
          <Image source={{ uri: userImgUrl }} style={{
              width: 40,
              height: 40,
              borderRadius: 50
          }}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderSection;
