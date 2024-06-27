import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Logo from "../../../assets/images/Logo1.png";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

const Login = () => {
  // Password visibility
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // User info
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [buttonSpinner, setButtonSpinner] = useState(false);
  const router = useRouter();


  //Password Error handler

  const handlePasswordValidation = (value) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError((prevError) => ({
        ...prevError,
        password: "Write at least one special character",
      }));
    } else if (!passwordOneNumber.test(password)) {
      setError((prevError) => ({
        ...prevError,
        password: "Write at least one number",
      }));
    } else if (!passwordSixValue.test(password)) {
      setError((prevError) => ({
        ...prevError,
        password: "Write at least 6 characters",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        password: "",
      }));
      setUserInfo({ ...userInfo, password: value });
    }
  };

  const handleLogin = () => {
    let valid = true;

    if (!userInfo.email) {
      setError((prevError) => ({
        ...prevError,
        email: "This field is required",
      }));
      valid = false;
    } else {
      setError((prevError) => ({
        ...prevError,
        email: "",
      }));
    }

    if (!userInfo.password) {
      setError((prevError) => ({
        ...prevError,
        password: "This field is required",
      }));
      valid = false;
    }

    if (valid) {
      // Proceed with login
      console.log("Logging in...");
    }
  };

  return (
    <View
      style={{
        backgroundColor: Colors.PRIMARY,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          padding: 20,
          marginTop: 0,
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
            Welcome Back you've been missed!
          </Text>
        </View>

        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            gap: 20,
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
              onChangeText={(value) => {
                setUserInfo({ ...userInfo, email: value });
                setError((prevError) => ({ ...prevError, email: "" }));
              }}
            />
          </View>
          {error.email && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 0,
                marginTop: -35,
              }}
            >
              <Entypo name="cross" size={18} color={"red"} />
              <Text style={{ color: "red", fontSize: 11, marginLeft: 5 }}>
                {error.email}
              </Text>
            </View>
          )}

          <View
            style={{
              position: "relative",
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 4,
            }}
          >
            <MaterialCommunityIcons
              name="lock-outline"
              size={24}
              color={Colors.LIGHT}
              style={{
                position: "absolute",
                top: 10,
                left: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor={Colors.LIGHT}
              onChangeText={handlePasswordValidation}
              style={{
                fontFamily: "outfit-light",
                fontSize: 18,
                color: Colors.LIGHT,
                paddingLeft: 40,
                paddingVertical: 10,
                paddingRight: 10,
              }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 20,
                top: 12,
              }}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              ) : (
                <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
          </View>
          {error.password && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 0,
                marginTop: -15,
              }}
            >
              <Entypo name="cross" size={18} color={"red"} />
              <Text style={{ color: "red", fontSize: 11, marginLeft: 5 }}>
                {error.password}
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 16,
              color: Colors.LIGHT,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password?
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.LIGHT,
            padding: 10,
            marginTop: 30,
            borderRadius: 10,
          }}
          onPress={handleLogin}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 20,
              textAlign: "center",
              color: Colors.PRIMARY,
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 40,
          }}
        >
          <Text
            style={{
              color: Colors.LIGHT,
              fontFamily: "outfit",
            }}
          >
            Don't have an account?{" "}
            <Text style={{ fontSize: 15, fontFamily: "outfit-bold" }}>
              Register Now
            </Text>
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.LIGHT,
            padding: 10,
            marginTop: 30,
            borderRadius: 10,
          }}
          onPress={() => router.push("/(routes)/sign-up")}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 20,
              textAlign: "center",
              color: Colors.PRIMARY,
            }}
          >
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
