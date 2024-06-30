import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

const PolicyDetails = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const PolicyListItems = [
    {
      id: "1",
      title: "Life Protection",
      icon: "family-restroom",
      library: "MaterialIcons",
      path: "/policyItems/life-protection",
      backgroundColor: "#217482",
    },
    {
      id: "2",
      title: "Vehicle Insurance",
      icon: "car",
      library: "FontAwesome5",
      path: "/policyItems/vehicle-insurance",
      backgroundColor: "#0F5A86",
    },
    {
      id: "3",
      title: "Health",
      icon: "health-and-safety",
      library: "MaterialIcons",
      path: "/policyItems/health-insurance",
      backgroundColor: "#953D6E",
    },
    {
      id: "4",
      title: "Savings and Investments",
      icon: "savings",
      library: "MaterialIcons",
      path: "/policyItems/savings-invest",
      backgroundColor: "#575393",
    },
    {
      id: "5",
      title: "Home Insurance",
      icon: "home-circle",
      library: "MaterialCommunityIcons",
      path: "/policyItems/home-insurance",
      backgroundColor: "#7B404F",
    },
    {
      id: "6",
      title: "Personal Accident",
      library: "MaterialIcons",
      icon: "accessible",
      path: "/policyItems/personal-accident",
      backgroundColor: "#3F3E41",
    },
    {
      id: "7",
      title: "Travel",
      library: "MaterialIcons",
      icon: "flight",
      path: "/policyItems/travel-insurance",
      backgroundColor: "#8379A7",
    },
  ];

  return (
    <View>
      {/* Top-Header View Customized  */}
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          height: 100,
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
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

      <View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.GREY,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          What we offer
        </Text>

        <ScrollView
          style={{
            marginBottom: 100,
            marginTop: 10,
          }}
        >
          <FlatList
            data={PolicyListItems}
            keyExtractor={(item) => item.id}
            numColumns={2}
            vertical={true}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 150,
            }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: item.backgroundColor,
                  borderRadius: 5,
                  width: 150,
                  height: 150,
                  margin: 20,
                }}
                onPress={() => router.push(item.path)}
              >
                <View
                  style={{
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.library === "MaterialIcons" && (
                    <MaterialIcons name={item.icon} size={80} color="#DCDCDC" />
                  )}
                  {item.library === "MaterialCommunityIcons" && (
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={90}
                      color="#DCDCDC"
                    />
                  )}
                  {item.library === "Entypo" && (
                    <Entypo name={item.icon} size={80} color="#DCDCDC" />
                  )}
                  {item.library === "FontAwesome" && (
                    <FontAwesome name={item.icon} size={90} color="#DCDCDC" />
                  )}
                  {item.library === "Ionicons" && (
                    <Ionicons name={item.icon} size={90} color="#DCDCDC" />
                  )}
                  {item.library === "FontAwesome5" && (
                    <FontAwesome5 name={item.icon} size={90} color="#DCDCDC" />
                  )}

                  <Text
                    style={{
                      fontFamily: "outfit-bold",
                      color: Colors.LIGHT,
                      fontSize: 16,
                      marginTop: 5,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default PolicyDetails;
