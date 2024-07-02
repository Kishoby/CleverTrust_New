import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { TextInput } from "react-native";

const MakePayment = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const handlePayment = () => {
    // Payment processing logic here
    alert('Payment Processed');
  };

  const handleSendSMS = () => {
    // Logic to send SMS with confirmation code
    alert(`Confirmation code sent to ${phoneNumber}`);
  };

  const handleConfirmCode = () => {
    // Logic to confirm the SMS code
    alert(`Code ${confirmationCode} confirmed`);
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
            Make Payment
          </Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}

      <View style={styles.container}>
        <Text style={styles.title}>Payment Details</Text>

        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <View style={styles.rowContainer}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry Date (MM/YY)"
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />

          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={setCvv}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
          value={cardHolder}
          onChangeText={setCardHolder}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TouchableOpacity style={styles.smsButton} onPress={handleSendSMS}>
          <Text style={styles.buttonText}>Send SMS Confirmation</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Confirmation Code"
          keyboardType="numeric"
          value={confirmationCode}
          onChangeText={setConfirmationCode}
        />

        <TouchableOpacity style={styles.smsButton} onPress={handleConfirmCode}>
          <Text style={styles.buttonText}>Confirm Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MakePayment;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop:10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: Colors.LIGHT,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  smsButton: {
    backgroundColor: "#41506C",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
