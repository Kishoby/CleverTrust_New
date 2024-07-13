import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderSection from "../../components/Home/HeaderSection";
import { Colors } from "@/constants/Colors";
import Sliders from "../../components/Home/Sliders";
import Categories from "../../components/Home/Categories";

export default function home() {
  return (
    <View
      style={{
        flex: 1,
        
      }}
    >
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          height: 110,
          position: "absolute",
          width: "100%",
          zIndex: 10,
        }}
      >
        <HeaderSection />
      </View>

      <ScrollView
        style={{
          paddingTop: 120,
        }}
      >
        <Sliders />

        <Categories />
      </ScrollView>
    </View>
  );
}
