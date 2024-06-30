import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PolicyDetails = () => {
  const navigation = useNavigation();

  return (
    <View>

      {/* Top-Header View Customized  */}
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          height: 100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginLeft: 20,
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 40,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}
          >
            Our Policies
          </Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}


    </View>
  );
};

export default PolicyDetails;
