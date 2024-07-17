import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Platform,ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';

const BookAppointment = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [currentCoverage, setCurrentCoverage] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleScheduleMeeting = () => {
    console.log('Scheduling meeting with:', { name, phone, insuranceType, currentCoverage, date, time });
    // Implement your scheduling logic here
  };

  const handleSubmit = () => {
    // Logic to handle claim submission, e.g., API calls, validation
    ToastAndroid.show("Appointment Submitted", ToastAndroid.LONG);
    // You can navigate to another screen or show a success message
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Top-Header View Customized  */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Book an Appointment</Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          
          <TextInput
            style={styles.input}
            placeholder="What type of insurance are you interested in?"
            value={insuranceType}
            onChangeText={setInsuranceType}
          />
          
          <Text style={styles.label}>Do you currently have any coverage?</Text>
          <Picker
            selectedValue={currentCoverage}
            onValueChange={(itemValue) => setCurrentCoverage(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="No, this is my first policy" value="first_policy" />
            <Picker.Item label="Yes, looking to switch providers" value="switch_providers" />
            <Picker.Item label="Yes, want to add/upgrade coverage" value="upgrade_coverage" />
            <Picker.Item label="Not sure" value="not_sure" />
          </Picker>
          
          <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowDatePicker(true)}>
            <Text>Select Date: {date.toLocaleDateString()}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowTimePicker(true)}>
            <Text>Select Time: {time.toLocaleTimeString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              testID="datePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              testID="timePicker"
              value={time}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChangeTime}
            />
          )}
          
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit Now</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#8e8f94',
  },
  header: {
    backgroundColor: Colors.PRIMARY,
    height: 100,
    justifyContent: 'flex-end',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'outfit-bold',
    fontSize: 20,
    marginLeft: 40,
  },
  container: {
    flexGrow: 1,
  },
  formContainer: {
    backgroundColor: 'white',
    marginTop:100,
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  picker: {
    height: 50,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  dateTimeButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: Colors.PRIMARY,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 2,
    marginTop: 20,
    
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "outfit-bold",
    fontSize: 16,
  },
});

export default BookAppointment;