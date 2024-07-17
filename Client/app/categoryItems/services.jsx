import { View, Text, TouchableOpacity, Image,Linking } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Services = () => {
  const ServiceListItems = [
    {
      id: "1",
      title: "Emergency Contact",
      icon: "contact-emergency",
      library: "MaterialIcons",
      action: () => Linking.openURL("tel:077 1411559"),
    },
    {
      id: "2",
      title: "Book an Appointment",
      icon: "calendar-month",
      library: "MaterialIcons",
      path: "/services/book-appointment",
    },
    {
      id: "3",
      title: "Customer Support",
      icon: "support-agent",
      library: "MaterialIcons",
      path: "/services/customer-support",
    },
    {
      id: "4",
      title: "Text Message",
      icon: "chatbox-ellipses-outline",
      library: "Ionicons",
      action: () => Linking.openURL("sms:0771411559?body=Hello, I need assistance"),
    },
    {
      id: "5",
      title: "Send a Mail",
      icon: "mail",
      library: "Ionicons",
      action: () => Linking.openURL("mailto:support@clevertrust.com?subject=Assistance Needed&body=Hello, I need assistance with..."),
    },

    {
      id: "6",
      title: "Help Center",
      icon: "contact-support",
      library: "MaterialIcons",
      action: () => Linking.openURL("https://support.google.com/")
    },
  ];

  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: "#F3F4F6",
        height: "100%",
      }}
    >
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
              color: "#F7F7FF",
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}
          >
            Our Services
          </Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}

      <View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://justatic.com/v/20231012123507/marketing/files/new/production/images/portal/insurance.jpg",
            }}
            style={{
              width: "94%",
              height: 160, // Adjust height as per your requirement
              borderRadius: 10,
              marginBottom: 10,
              padding: 10,
              marginTop: 20,
            }}
            resizeMode="cover"
          />
        </View>

        <Text
          style={{
            marginTop: 20,
            marginHorizontal: 20,
            fontFamily: "outfit-bold",
          }}
        >
          How can we help?
        </Text>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <FlatList
            data={ServiceListItems}
            keyExtractor={(item) => item.id}
            numColumns={3}
            vertical={true}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 100,
                  marginHorizontal: 10,
                  marginBottom: 40,
                  backgroundColor:Colors.PRIMARY,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                onPress={() =>
                  item.action ? item.action() : router.push(item.path)
                }
              >
                <View
                  style={{
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.library === "MaterialIcons" && (
                    <MaterialIcons name={item.icon} size={50} color="#FFF" />
                  )}
                  {item.library === "MaterialCommunityIcons" && (
                    <MaterialCommunityIcons
                      name={item.icon}
                      size={60}
                      color="#217482"
                    />
                  )}
                  {item.library === "Entypo" && (
                    <Entypo name={item.icon} size={60} color="#217482" />
                  )}
                  {item.library === "FontAwesome" && (
                    <FontAwesome name={item.icon} size={60} color="#217482" />
                  )}
                  {item.library === "Ionicons" && (
                    <Ionicons name={item.icon} size={50} color="#FFF" />
                  )}
                  {item.library === "FontAwesome5" && (
                    <FontAwesome5 name={item.icon} size={60} color="#217482" />
                  )}

                  <Text
                    style={{
                      fontFamily: "outfit-bold",
                      color: Colors.LIGHT,
                      fontSize: 11,
                      marginTop: 5,
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <Text
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            fontFamily: "outfit",
            color: Colors.GREY,
            textAlign: "center",
          }}
        >
          "For any inquiries or support, please feel free to contact us via the
          methods listed above. We're always ready to assist!"
        </Text>

        <Text
          style={{
            marginTop: 30,
            marginHorizontal: 20,
            fontFamily: "outfit-bold",
            color: Colors.PRIMARY,
            textAlign: "center",
          }}
        >
          © 2024 Clever Trust Ltd. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default Services;
