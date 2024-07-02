import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";

const LocationPage = () => {
  const navigation = useNavigation();

  // Coordinates for 7th lane, Central Road, Orr's hill, Trincomalee
  // Note: These are approximate coordinates. Please replace with exact coordinates.
  const location = {
    latitude: 8.5768,
    longitude: 81.2300,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };

  const address = "7th lane, Central Road, Orr's hill, Trincomalee";

  const openMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Top-Header View Customized */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Our Location</Text>
        </View>
      </View>

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={location}
      >
        <Marker coordinate={location} title="Insurance Office" />
      </MapView>

      {/* Address Information */}
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Visit Us At:</Text>
        <Text style={styles.addressText}>{address}</Text>
        <TouchableOpacity style={styles.directionsButton} onPress={openMaps}>
          <Ionicons name="navigate" size={20} color="white" />
          <Text style={styles.directionsButtonText}>Get Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  map: {
    flex: 1,
  },
  addressContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  directionsButton: {
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  directionsButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default LocationPage;