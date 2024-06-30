import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

const LifeProtection = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const LifePlansList = [
    {
      id: "1",
      planName: "3-Year Short-Term Endowment",
      coveragePeriod: "3 years",
      interest: "Fixed 2.5% annually",
      policyFeatures: "Short-term savings and protection",
      deathBenefit: "$50,000",
      imageUrl:
        "https://images.pexels.com/photos/8441775/pexels-photo-8441775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "2",
      planName: "Long-Term Plan (10 or 20 Years)",
      coveragePeriod: "10 or 20 years",
      interest: "Not applicable",
      policyFeatures: "Affordable premiums, High coverage amount",
      deathBenefit: "$100,000",
      imageUrl:
        "https://images.pexels.com/photos/7735625/pexels-photo-7735625.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      planName: "Whole Life Insurance",
      coveragePeriod: "Lifetime",
      interest: "Guaranteed minimum 2% annually",
      policyFeatures: "Lifetime coverage, Cash value accumulation",
      deathBenefit: "$200,000",
      imageUrl:
        "https://images.pexels.com/photos/8439694/pexels-photo-8439694.jpeg?auto=compress&cs=tinysrgb&w=600",
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
            Life Protection
          </Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}

      <View
        style={{
          margin: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
          }}
        >
          Available Life Plans
        </Text>
      </View>

      <View
        style={{
          marginBottom: 320,
        }}
      >
        <FlatList
          data={LifePlansList}
          keyExtractor={(item) => item.id}
          numColumns={1}
          vertical={true}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 150,
          }}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: Colors.PRIMARY,
                borderRadius: 5,
                width: 360,
                marginBottom: 20,
              }}
            >
              <View>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{
                    width: "100%",
                    height: 150, // Adjust height as per your requirement
                    borderRadius: 5,
                    marginBottom: 10,
                    padding: 10,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    color: Colors.LIGHT,
                    fontSize: 18,
                    marginBottom: 5,
                  }}
                >
                  {item.planName}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <Ionicons
                    name="time-outline"
                    size={18}
                    color={Colors.LIGHT}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.LIGHT,
                      fontSize: 14,
                    }}
                  >
                    Coverage Period: {item.coveragePeriod}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <Ionicons
                    name="caret-forward"
                    size={18}
                    color={Colors.LIGHT}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.LIGHT,
                      fontSize: 14,
                    }}
                  >
                    Interest: {item.interest}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <Ionicons
                    name="caret-forward"
                    size={18}
                    color={Colors.LIGHT}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.LIGHT,
                      fontSize: 14,
                      marginRight:5
                    }}
                  >
                    Policy Features: {item.policyFeatures}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="caret-forward"
                    size={18}
                    color={Colors.LIGHT}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.LIGHT,
                      fontSize: 14,
                    }}
                  >
                    Death Benefit: {item.deathBenefit}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default LifeProtection;
