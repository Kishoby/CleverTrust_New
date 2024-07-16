import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";

const ProfilePage = () => {
  const navigation = useNavigation();

  
  const user = {
    name: "Gobihanath.Balasubramaniam",
    email: "Gobi26@gmail.com",
    contact: "+94 761281559",
    insurance_ID: "GK 152610",
    profileimage: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png" 
  };



  return (
    <SafeAreaView style={ {
      flex: 1,
      backgroundColor:"#ACACB0",
    }}>

      <ScrollView>

        <View style={styles.profileSection}>
          <Image source={{ uri: user.profileimage }} style={styles.profileimage} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
       

       
          <View style={styles.options}>
            <Ionicons name="call-outline" size={20} color="#0a295c" />
            <Text style={styles.detail}>{user.contact}</Text>
            </View>
            <View style={styles.insurance}>
            <Ionicons name="document-text-outline" size={20} color="#0a295c" />
            <Text style={styles.detail}>Insurance_ID: {user.insurance_ID}</Text>
            </View>
        </View>

       

        <View style={styles.Option_Section}>
          
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="settings" size={24} color="#0a295c" />
            <Text style={styles.optionText}>Settings</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#C7C7CC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="help-circle-outline" size={24} color="#0a295c" />
            <Text style={styles.optionText}>Help & Support</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#C7C7CC" />
          </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 10,
              marginTop: 40,
              borderRadius: 30,
              marginBottom: 25,
            }}
            onPress={() => router.push("/(routes)/login")}
          >
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 20,
                textAlign: "center",
                color: "white",
              }}
            >
              Log Out 
            </Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  profileSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomColor:'black',
  },
  profileimage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 18,
    color: '#666',
  },
 
  options: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  insurance: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  detail: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  Option_Section: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
});

export default ProfilePage;