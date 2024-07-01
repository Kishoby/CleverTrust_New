import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

const PersonalAccidentInsurance = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const AccidentPlansList = [
    {
      id: "1",
      planName: "Basic Accident Protection",
      coveragePeriod: "1 year",
      monthlyPremium: "$15",
      coverageAmount: "Up to $50,000",
      policyFeatures: "Accidental Death, Dismemberment",
      imageUrl:
        "https://www.sompo.com.sg/images/default-source/blog-images/3_reasons_need_personal_accident_coverage_for_your_children_03.jpg?sfvrsn=f19170a2_2",
    },
    {
      id: "2",
      planName: "Comprehensive Accident Cover",
      coveragePeriod: "1 year",
      monthlyPremium: "$25",
      coverageAmount: "Up to $100,000",
      policyFeatures: "Accidental Death, Dismemberment, Disability, Medical Expenses",
      imageUrl:
        "https://miciph.com/wp-content/uploads/2020/06/shutterstock_422427826.jpg.webp",
    },
    {
      id: "3",
      planName: "Premium Accident Shield",
      coveragePeriod: "1 year",
      monthlyPremium: "$40",
      coverageAmount: "Up to $250,000",
      policyFeatures: "All-inclusive coverage, Income Protection, Global Coverage",
      imageUrl:
        "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600",
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
            Personal Accident Insurance
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
          Available Accident Insurance Plans
        </Text>
      </View>

      <View
        style={{
          marginBottom: 320,
        }}
      >
        <FlatList
          data={AccidentPlansList}
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
                    height: 150,
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
                    color: '#DCDCDC',
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
                    name="cash-outline"
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
                    Monthly Premium: {item.monthlyPremium}
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
                    name="shield-outline"
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
                    Coverage Amount: {item.coverageAmount}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons
                    name="list-outline"
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
                    Policy Features: {item.policyFeatures}
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

export default PersonalAccidentInsurance;