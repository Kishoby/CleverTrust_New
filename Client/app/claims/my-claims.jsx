import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

const MyClaims = () => {
  const claimsData = [
    {
      id: "1",
      claimTitle: "Car Accident Claim",
      claimNumber: "CLM001",
      claimStatus: "In Progress",
      claimType: "Vehicle",
      incidentDate: "2024-06-20",
      submissionDate: "2024-06-21",
      estimatedAmount: "$5000",
    },
    {
      id: "2",
      claimTitle: "Medical Expense Claim",
      claimNumber: "CLM002",
      claimStatus: "Approved",
      claimType: "Health",
      incidentDate: "2024-06-18",
      submissionDate: "2024-06-19",
      estimatedAmount: "$1200",
    },
    // Add more claims as needed
  ];

  const navigation = useNavigation();
  const router = useRouter();

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
            My Claims
          </Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}

      <View
        style={{
          marginTop: 20,
        }}
      >
        <FlatList
          data={claimsData}
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
                backgroundColor: "#D8D8D8",
                borderRadius: 5,
                width: 360,
                marginBottom: 20,
                borderColor: Colors.PRIMARY,
                borderWidth: 1.5,
                
              }}
            >
              <View
                style={{
                  marginTop: 5,
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: 17,
                  }}
                >
                  {item.claimTitle}
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    color={Colors.PRIMARY}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.PRIMARY,
                      fontSize: 14,
                    }}
                  >
                    Claim Number: {item.claimNumber}
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
                    color={Colors.PRIMARY}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.PRIMARY,
                      fontSize: 14,
                    }}
                  >
                    Claim Type: {item.claimType}
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
                    color={Colors.PRIMARY}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.PRIMARY,
                      fontSize: 14,
                    }}
                  >
                    Claim Status: {item.claimStatus}
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
                    color={Colors.PRIMARY}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.PRIMARY,
                      fontSize: 14,
                    }}
                  >
                    Incident Date: {item.incidentDate}
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
                    color={Colors.PRIMARY}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.PRIMARY,
                      fontSize: 14,
                    }}
                  >
                    Submission Date: {item.submissionDate}
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
                    color={Colors.PRIMARY}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.PRIMARY,
                      fontSize: 14,
                    }}
                  >
                    Estimated Amount: {item.estimatedAmount}
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

export default MyClaims;
