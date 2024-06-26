import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "./../../constants/Colors.ts";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontFamily: "outfit", fontSize: 11 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="myPolicies"
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontFamily: "outfit", fontSize: 11 }}>
              MyPolicies
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="shield-check"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="myOffers"
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontFamily: "outfit", fontSize: 11 }}>
              MyOffers
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="gift" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontFamily: "outfit", fontSize: 11 }}>
              Notifications
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontFamily: "outfit", fontSize: 11 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
