import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";

const TravelInsurance = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const TravelPlansList = [
    {
      id: "1",
      planName: "Basic Travel Cover",
      coveragePeriod: "Per trip (up to 30 days)",
      premium: "From $20 per trip",
      coverageAmount: "Up to $50,000",
      policyFeatures: "Medical Expenses, Trip Cancellation",
      imageUrl:
        "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "2",
      planName: "Comprehensive Travel Protection",
      coveragePeriod: "Per trip (up to 60 days)",
      premium: "From $35 per trip",
      coverageAmount: "Up to $100,000",
      policyFeatures: "Medical Expenses, Trip Cancellation, Luggage Loss, Travel Delay",
      imageUrl:
        "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      planName: "Premium Global Travel Shield",
      coveragePeriod: "Annual multi-trip",
      premium: "From $200 per year",
      coverageAmount: "Up to $250,000",
      policyFeatures: "All-inclusive coverage, Adventure Sports, Rental Car Protection",
      imageUrl:
        "https://i.insider.com/63c99bf42a1e600018b8c401?width=1136&format=jpeg",
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
            Travel Insurance
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
          Available Travel Insurance Plans
        </Text>
      </View>

      <View
        style={{
          marginBottom: 320,
        }}
      >
        <FlatList
          data={TravelPlansList}
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
                    Premium: {item.premium}
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

export default TravelInsurance;