import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "./../../constants/Colors.ts";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TabLayout = () => {
  
 //Render back button. here im navigating to home.
  const navigation = useNavigation();

  const renderBackButton = () => (
    <TouchableOpacity onPress={() => navigation.navigate('home')}>
      <View style={{ marginLeft: 20 }}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
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
          title: "My Policies",
          headerTitleAlign: 'center',
          headerLeft: renderBackButton,
          headerTitleStyle: {
            color: 'white', // Set title color
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY, // Set header background color
          },
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
          title: "My Offers",
          headerTitleAlign: 'center',
          headerLeft: renderBackButton,
          headerTitleStyle: {
            color: 'white', // Set title color
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY, // Set header background color
          },
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
          title: "Notifications",
          headerTitleAlign: 'center',
          headerLeft: renderBackButton,
          headerTitleStyle: {
            color: 'white', // Set title color
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY, // Set header background color
          },
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
          title: "Profile",
          headerTitleAlign: 'center',
          headerLeft: renderBackButton,
          headerTitleStyle: {
            color: 'white', // Set title color
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY, // Set header background color
          },
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
