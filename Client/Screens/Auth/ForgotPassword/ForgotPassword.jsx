import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { Colors } from "@/constants/Colors";
  import Logo from "../../../assets/images/Logo1.png";
  import {
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
  import { Link, router } from "expo-router";
  
  const ForgotPassword = () => {
    return (
      <ScrollView
        style={{
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            padding: 20,
            marginTop: 100,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={Logo}
              style={{
                width: 150,
                height: 230,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.GRAY,
                fontSize: 16,
              }}
            >
              Forgot your password? No worries!
            </Text>
          </View>
  
          <View
            style={{
              marginTop: 30,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <View
              style={{
                position: "relative",
                borderColor: "#fff",
                borderWidth: 1,
                borderRadius: 4,
                marginBottom: 20,
              }}
            >
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color={Colors.LIGHT}
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              />
              <TextInput
                placeholder="Enter your email"
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
  
          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT,
              padding: 10,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={() => router.push("/(routes)/OTPVerification")}
          >
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 20,
                textAlign: "center",
                color: Colors.PRIMARY,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
  
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: Colors.LIGHT,
                fontFamily: "outfit",
              }}
            >
              Remember your password?{" "}
              <Text style={{ fontSize: 15, fontFamily: "outfit-bold" }}>
                {" "}
                <Link href="/(routes)/login">Login</Link>
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default ForgotPassword;