import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { TextInput } from "react-native";

const Payments = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const handlePaymentSubmit = () => {
    router.push("/payments/make-payment");
  };

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
            Payments
          </Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}

      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            marginHorizontal: 25,
            marginTop: 20,
          }}
        >
          Make your payments here
        </Text>
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <TextInput
            placeholder="Policy Holder's Name"
            placeholderTextColor={Colors.LIGHT}
            style={styles.input}
          />

          <TextInput
            placeholder="Policy ID"
            placeholderTextColor={Colors.LIGHT}
            style={styles.input}
          />

          <TextInput
            placeholder="Amount"
            placeholderTextColor={Colors.LIGHT}
            style={styles.input}
            keyboardType="numeric"
          />

          <TextInput
            placeholder="Phone Number to receive confirmation"
            placeholderTextColor={Colors.LIGHT}
            style={styles.input}
            keyboardType="numeric"
          />

          <TextInput
            placeholder="NIC/ License No"
            placeholderTextColor={Colors.LIGHT}
            style={styles.input}
          />

          <TouchableOpacity
            onPress={handlePaymentSubmit}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>Make Payment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePaymentSubmit}
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>View History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Payments;

const styles = StyleSheet.create({
  input: {
    fontFamily: "outfit-light",
    fontSize: 18,
    color: Colors.GREY,
    paddingLeft: 10,
    paddingVertical: 10,
    borderColor: Colors.PRIMARY,
    borderWidth: 1.2,
    borderRadius: 4,
    marginBottom: 20,
  },
  
  submitButton: {
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "outfit-bold",
    fontSize: 18,
  },
});
