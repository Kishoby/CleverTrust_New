import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import { Colors } from "@/constants/Colors";
  import Logo from "../../../assets/images/Logo1.png";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { router } from "expo-router";
  
  const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  
    const handleResetPassword = () => {
      if (newPassword !== confirmPassword) {
        // Show error message: passwords don't match
        return;
      }
      if (newPassword.length < 8) {
        // Show error message: password too short
        return;
      }
      // Add your logic here to reset the password
      // If successful, navigate to login or home screen
      router.push("/(routes)/login");
    };
  
    return (
      <ScrollView style={{ backgroundColor: Colors.PRIMARY, width: "100%", height: "100%" }}>
        <View style={{ padding: 20, marginTop: 100 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Logo} style={{ width: 150, height: 230 }} />
            <Text style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 16, textAlign: "center" }}>
              Enter your new password
            </Text>
          </View>
  
          <View style={{ marginTop: 30 }}>
            <View style={{
              position: "relative",
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 4,
              marginBottom: 20,
            }}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color={Colors.LIGHT}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 10,
                }}
              />
              <TextInput
                placeholder="New Password"
                placeholderTextColor={Colors.LIGHT}
                secureTextEntry={!isNewPasswordVisible}
                style={{
                  fontFamily: "outfit-light",
                  fontSize: 18,
                  color: Colors.LIGHT,
                  paddingLeft: 40,
                  paddingVertical: 10,
                  paddingRight: 40,
                }}
                value={newPassword}
                onChangeText={setNewPassword}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 10,
                  top: 12,
                }}
                onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
              >
                <MaterialCommunityIcons
                  name={isNewPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color={Colors.LIGHT}
                />
              </TouchableOpacity>
            </View>
  
            <View style={{
              position: "relative",
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 4,
              marginBottom: 20,
            }}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color={Colors.LIGHT}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 10,
                }}
              />
              <TextInput
                placeholder="Confirm New Password"
                placeholderTextColor={Colors.LIGHT}
                secureTextEntry={!isConfirmPasswordVisible}
                style={{
                  fontFamily: "outfit-light",
                  fontSize: 18,
                  color: Colors.LIGHT,
                  paddingLeft: 40,
                  paddingVertical: 10,
                  paddingRight: 40,
                }}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 10,
                  top: 12,
                }}
                onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
              >
                <MaterialCommunityIcons
                  name={isConfirmPasswordVisible ? "eye-off" : "eye"}
                  size={24}
                  color={Colors.LIGHT}
                />
              </TouchableOpacity>
            </View>
          </View>
  
          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT,
              padding: 10,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={() => router.push("/(routes)/login")}
          >
            <Text style={{ fontFamily: "outfit-bold", fontSize: 20, textAlign: "center", color: Colors.PRIMARY }}>
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  export default ResetPassword;