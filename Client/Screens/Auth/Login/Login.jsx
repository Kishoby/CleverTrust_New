import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {Colors} from "@/constants/Colors";
import Logo from "../../../assets/images/Logo1.png";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';


const Login = () => {
  const router = useRouter();

  return (
    <View style={{
      backgroundColor: Colors.PRIMARY,
      width: "100%",
      height: "100%"
    }}>
      <View
        style={{
          padding: 20,
          marginTop: 0,
        }}
      >
        <View style={{
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Image source={Logo} style={{
            width: 150,
            height: 230
          }} />
          <Text style={{
            fontFamily: "outfit",
            color: Colors.GRAY,
            fontSize: 16
          }}>Welcome Back you've been missed!</Text>
        </View>

        <View style={{
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          gap: 20
        }}>
          <View style={{
            position: 'relative',
            borderColor: "#fff",
            borderWidth: 1,
            borderRadius: 4,
            marginBottom: 20,
          }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color={Colors.LIGHT}
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
              }}
            />
            <TextInput
              placeholder="Email/Username"
              placeholderTextColor={Colors.LIGHT}
              style={{
                fontFamily: "outfit-light",
                fontSize: 18,
                color: Colors.LIGHT,
                paddingLeft: 40,
                paddingVertical: 10,
                paddingRight: 10,
              }}
            />
          </View>

          <View style={{
            position: 'relative',
            borderColor: "#fff",
            borderWidth: 1,
            borderRadius: 4,
          }}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={Colors.LIGHT}
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={Colors.LIGHT}
              style={{
                fontFamily: "outfit-light",
                fontSize: 18,
                color: Colors.LIGHT,
                paddingLeft: 40,
                paddingVertical: 10,
                paddingRight: 10,
              }}
            />
          </View>
        </View>

        <View style={{
          marginTop: 20
        }}>
          <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 16,
            color: Colors.LIGHT,
            alignSelf: "flex-end"
          }}>Forgot your password ?</Text>
        </View>

        <TouchableOpacity style={{
          backgroundColor: Colors.LIGHT,
          padding: 10,
          marginTop: 30,
          borderRadius: 10
        }}>
          <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            textAlign: "center",
            color: Colors.PRIMARY,
          }}>Sign In</Text>
        </TouchableOpacity>

        <View style={{
          marginTop: 40
        }}>
          <Text style={{
            color: Colors.LIGHT,
            fontFamily: "outfit",
          }}>Don't have an account? <Text style={{ fontSize: 15, fontFamily: "outfit-bold" }}> Register Now </Text></Text>
        </View>
        

       
        <TouchableOpacity style={{
          backgroundColor: Colors.LIGHT,
          padding: 10,
          marginTop: 30,
          borderRadius: 10
        }}
        onPress={()=>router.push('/(routes)/sign-up')}
        >
          <Text style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            textAlign: "center",
            color: Colors.PRIMARY,
          }}>Register Now</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Login;


