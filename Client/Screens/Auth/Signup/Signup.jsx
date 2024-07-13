import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Logo from "../../../assets/images/Logo1.png";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig.js';

const SignUp = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [name, setName] = useState();

  const onCreateAccount = () => {
    if (!email || !password || !confirmPassword || !name) {
      ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
      return;
    }
    
    if (password !== confirmPassword) {
      ToastAndroid.show('Passwords do not match', ToastAndroid.LONG);
      return;
    }
    
    if (!isChecked) {
      ToastAndroid.show('Please accept the terms and conditions', ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        ToastAndroid.show('Registered Successfully !', ToastAndroid.LONG);
        router.replace("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

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
            Create a new account? Just a few steps!
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
            <FontAwesome
              name="user"
              size={24}
              color={Colors.LIGHT}
              style={{
                position: "absolute",
                top: 10,
                left: 10,
              }}
            />
            <TextInput
              placeholder="Name"
              placeholderTextColor={Colors.LIGHT}
              onChangeText={(value) => setName(value)}
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
              onChangeText={(value) => setEmail(value)}
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
              onChangeText={(value) => setPassword(value)}
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
              placeholder="Confirm Password"
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor={Colors.LIGHT}
              onChangeText={(value) => setConfirmPassword(value)}
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
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-end",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: Colors.LIGHT,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            {isChecked && (
              <MaterialCommunityIcons
                name="check"
                size={15}
                color={Colors.LIGHT}
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "outfit-light",
              fontSize: 16,
              color: Colors.LIGHT,
            }}
          >
            I accept the terms and conditions
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.LIGHT,
            padding: 10,
            marginTop: 30,
            borderRadius: 10,
          }}
          onPress={onCreateAccount}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 20,
              textAlign: "center",
              color: Colors.PRIMARY,
            }}
          >
            Register
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
            Already have an account?{" "}
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

export default SignUp;
