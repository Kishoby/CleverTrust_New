import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState, useEffect, useRef } from "react";
  import { Colors } from "@/constants/Colors";
  import Logo from "../../../assets/images/Logo1.png";
  import { router } from "expo-router";
  
  const OTPVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const [email, setEmail] = useState("****.com"); // Assume this is passed from previous screen
    const intervalRef = useRef(null);
  
    useEffect(() => {
      startTimer();
      return () => clearInterval(intervalRef.current);
    }, []);
  
    const startTimer = () => {
      setCanResend(false);
      setTimer(60);
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(intervalRef.current);
            setCanResend(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    };
  
    const handleOtpChange = (value, index) => {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (value !== '' && index < 3) {
        inputRefs[index + 1].focus();
      }
    };
  
    const handleResendOTP = () => {
      // Add your logic here to resend OTP
      startTimer();
    };
  
    const handleChangeEmail = () => {
      // Navigate back to ForgotPassword screen
      router.push("/(routes)/forgot-password");
    };
  
    const inputRefs = [];
  
    return (
      <ScrollView style={{ backgroundColor: Colors.PRIMARY, width: "100%", height: "100%" }}>
        <View style={{ padding: 20, marginTop: 100 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image source={Logo} style={{ width: 150, height: 230 }} />
            <Text style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 16, textAlign: "center" }}>
              Enter the 4-digit code sent to   {email}
            </Text>
          </View>
  
          <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => inputRefs[index] = ref}
                style={{
                  borderColor: "#fff",
                  borderWidth: 1,
                  borderRadius: 4,
                  width: 50,
                  height: 50,
                  fontSize: 24,
                  textAlign: "center",
                  color: Colors.LIGHT,
                }}
                maxLength={1}
                keyboardType="number-pad"
                value={otp[index]}
                onChangeText={(value) => handleOtpChange(value, index)}
              />
            ))}
          </View>
  
          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT,
              padding: 10,
              marginTop: 30,
              borderRadius: 10,
            }}
            onPress={() => router.push("/(routes)/resetPassword")}
          >
            <Text style={{ fontFamily: "outfit-bold", fontSize: 20, textAlign: "center", color: Colors.PRIMARY }}>
              Verify OTP
            </Text>
          </TouchableOpacity>
  
          <View style={{ marginTop: 20, alignItems: "center" }}>
            {timer > 0 ? (
              <Text style={{ color: Colors.LIGHT, fontFamily: "outfit" }}>
                Resend OTP in {timer} seconds
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResendOTP} disabled={!canResend}>
                <Text style={{ color: canResend ? Colors.LIGHT : Colors.GRAY, fontFamily: "outfit-bold", fontSize: 15 }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            )}
            
            {/* Change Email option */}
            <TouchableOpacity onPress={handleChangeEmail} style={{ marginTop: 10 }}>
              <Text style={{ color: Colors.LIGHT, fontFamily: "outfit-bold", fontSize: 17 }}>
                Change Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default OTPVerification;