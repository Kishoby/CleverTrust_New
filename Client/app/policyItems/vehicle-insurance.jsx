import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native";

const VehicleInsurance = () => {
  const navigation = useNavigation();

  const VehiclePlansList = [
    {
      id: "1",
      planName: "Comprehensive Coverage",
      coveragePeriod: "1 year",
      interest: "Varies by provider",
      policyFeatures: "Full protection against all types of damages",
      premium: "$500/year",
      imageUrl:
        "https://media.licdn.com/dms/image/D5612AQG1ZB52J_OzsA/article-cover_image-shrink_720_1280/0/1688531022471?e=2147483647&v=beta&t=A3XT20OZ0dm1ivnrY-7JcINnWXnUMDbizg4BhcKrwCw",
    },
    {
      id: "2",
      planName: "Third-Party Liability",
      coveragePeriod: "1 year",
      interest: "Varies by provider",
      policyFeatures: "Coverage for damages to third-party property",
      premium: "$300/year",
      imageUrl:
        "https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      planName: "Collision Coverage",
      coveragePeriod: "1 year",
      interest: "Varies by provider",
      policyFeatures: "Protection against collisions with other vehicles",
      premium: "$400/year",
      imageUrl:
        "https://beersandgordonlaw.com/wp-content/uploads/2022/11/Toy-cars-Large-1024x373.jpg",
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
            Vehicle Insurance
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
          Available Plans
        </Text>
      </View>

      <View
        style={{
          marginBottom: 320,
        }}
      >
        <FlatList
          data={VehiclePlansList}
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
                      marginRight: 5,
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
                    Premium: {item.premium}
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

export default VehicleInsurance;
