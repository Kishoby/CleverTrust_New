import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Image,
  SafeAreaView
} from 'react-native';
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const MyOffers = () => {
  const navigation = useNavigation();

  // Sample offers data
  const offers = [
    { id: '1', title: '15% Off on Auto Insurance', description: 'Get 15% off on new auto insurance policies', expiry: '2024-08-26', image: 'https://www.prontoinsurance.com/blog/wp-content/uploads/2019/07/flex-insurance.jpg' },
    { id: '2', title: 'Free Home Inspection', description: 'Sign up for home insurance and get a free home inspection', expiry: '2024-08-15', image: 'https://www.newhomesource.com/learn/wp-content/uploads/2020/01/home-inspection-1.jpg' },
    { id: '3', title: '20% Discount on Life Insurance', description: 'Limited time offer: 20% off on all life insurance plans', expiry: '2025-01-26', image: 'https://www.axisbank.com/images/default-source/progress-with-us_new/insure/types-of-life-insurance-policies-b.jpg' },
    { id: '4', title: 'Bundle and Save 25%', description: 'Save 25% when you bundle your home and auto insurance policies', expiry: '2024-01-31', image: 'https://www.statefarm.com/content/dam/sf-library/en-us/secure/legacy/simple-insights/what-affects-car-insurance-premiums.jpg' },
  { id: '5', title: 'First Month Free on Health Insurance', description: 'New customers get their first month of health insurance coverage for free', expiry: '2025-02-06', image: 'https://uploads-ssl.webflow.com/63358b90be38d412c5c304a9/63cea63adb594e8280635891_Health-insurance.jpg' },
  { id: '6', title: '10% Senior Citizen Discount', description: 'Seniors aged 65 and above get 10% off on all insurance policies', expiry: 'No Expiry', image: 'https://www.greaterkashmir.com/wp-content/uploads/2023/08/seniro_citizen.jpg' },
    // Add more offers as needed
  ];

  const renderOfferItem = ({ item }) => (
    <TouchableOpacity style={styles.offerItem}>
      <Image source={{ uri: item.image }} style={styles.offerImage} />
      <View style={styles.offerContent}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerDescription}>{item.description}</Text>
        <Text style={styles.offerExpiry}>Expires: {item.expiry}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top-Header View Customized */}
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}> 
          </TouchableOpacity>
        </View>

      <FlatList
        data={offers}
        renderItem={renderOfferItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.offersList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  offersList: {
    padding: 16,
  },
  offerItem: {
    backgroundColor: '#c3c4c9',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  offerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  offerContent: {
    padding: 16,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"#79136D",
    fontFamily:"outfit-bold"
  },
  offerDescription: {
    fontSize: 14,
    color: Colors.PRIMARY,
    marginBottom: 8,
    fontFamily: "outfit-bold"
  },
  offerExpiry: {
    fontSize: 12,
    color: Colors.PRIMARY,
    fontWeight: 'bold',
  },
});

export default MyOffers;