import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

const HomeInsurance = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const HomePlansList = [
    {
      id: "1",
      planName: "Basic Home Coverage",
      coveragePeriod: "1 year",
      monthlyPremium: "$50",
      policyFeatures: "Structure, Personal Property",
      coverageLimit: "$200,000",
      imageUrl:
        "https://cdn-digkohb.nitrocdn.com/BqxdURiIUFdhIpOvVcTrJrUBaMhurfTZ/assets/images/optimized/rev-ea43c0b/homelightblog.wpengine.com/wp-content/uploads/2023/01/Can-I-Sell-My-House-to-a-Family-Member-1-min.jpg",
    },
    {
      id: "2",
      planName: "Standard Home Protection",
      coveragePeriod: "1 year",
      monthlyPremium: "$75",
      policyFeatures: "Structure, Personal Property, Liability",
      coverageLimit: "$350,000",
      imageUrl:
        "https://media.istockphoto.com/id/165142855/photo/smiling-family-on-front-lawn-of-a-house.jpg?s=612x612&w=0&k=20&c=MvBypgiy_E_KDsP0PN05lr4awJYBEqYeg_H5qorOw2U=",
    },
    {
      id: "3",
      planName: "Premium Home Shield",
      coveragePeriod: "1 year",
      monthlyPremium: "$100",
      policyFeatures: "All-inclusive, Additional Living Expenses",
      coverageLimit: "$500,000",
      imageUrl:
        "https://media.istockphoto.com/id/168372720/photo/happy-family-with-key-of-their-new-house.jpg?s=612x612&w=0&k=20&c=XVZeEdelMsQPasXpV37dq_MMXcK7QtF24lqtE7JVS_E=",
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
            Home Insurance
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
          Available Home Insurance Plans
        </Text>
      </View>

      <View
        style={{
          marginBottom: 320,
        }}
      >
        <FlatList
          data={HomePlansList}
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
                      marginRight:5
                    }}
                  >
                    Policy Features: {item.policyFeatures}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
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
                    }}
                  >
                    Coverage Limit: {item.coverageLimit}
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

export default HomeInsurance;