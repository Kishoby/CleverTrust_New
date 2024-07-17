import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import { Feather } from '@expo/vector-icons';

const ProfilePage = () => {
  const navigation = useNavigation();
  

  const onLogout=()=>{
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "No",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => router.push('/login'),
          style: "destructive"
        }
      ],
      { cancelable: false }
    );
  }

  
  const user = {
    name: "Gobihanath B",
    email: "gobikish2615@gmail.com",
    contact: "+94 761281559",
    insurance_ID: "GK 152610",
    profileimage: "https://lh3.googleusercontent.com/a/ACg8ocIvqHMU518dBDTOo7yNbXPSso6UgnoQANv3_ZpXF5IDjCKTZX_v=s360-c-no" 
  };



  return (
    <SafeAreaView style={ {
      flex: 1,
      backgroundColor:"#DADDE0",
    }}>

      <ScrollView>

        <View style={styles.profileSection}>
          <Image source={{ uri: user.profileimage }} style={styles.profileimage} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
       

       
          
        </View>

            <View style={{
              backgroundColor:"#FFFFFF",
              marginTop:20
            }}>
            <View style={styles.options}>
            <Ionicons name="document-text-outline" size={20} color="#0a295c" />
            <Text style={styles.detail}>Insurance ID: {user.insurance_ID}</Text>
            </View>
            <View style={styles.options}>
            <Ionicons name="call-outline" size={20} color="#0a295c" />
            <Text style={styles.detail}>{user.contact}</Text>
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
          <TouchableOpacity style={styles.optionRow}  onPress={onLogout}>
            <Feather name="log-out" size={24} color="#0a295c" />
            <Text style={styles.optionText}>Log Out</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="#C7C7CC" />
          </TouchableOpacity>
        </View>
        <View>
        
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
    marginTop:0,
    paddingTop:40
  },
  profileimage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderColor:Colors.PRIMARY,
    borderWidth:1
  },
  userName: {
    fontSize: 20,
    fontStyle:"outfit",
    fontWeight:"bold",
    color:Colors.PRIMARY,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 18,
    color: '#666',
    marginBottom:20
  },
 
  options: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  insurance: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  detail: {
    marginLeft: 10,
    fontSize: 16,
    
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