import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";

const MyOffers = () => {
  const navigation = useNavigation();

  // Sample offers data
  const offers = [
    {
      id: "1",
      title: "15% Off on Auto Insurance",
      description: "Get 15% off on new auto insurance policies",
      expiry: "2024-08-26",
      image:
        "https://blog.khalti.com/wp-content/uploads/2023/12/Insurance-Payment-Offer.jpg",
    },
    {
      id: "2",
      title: "Free Home Inspection",
      description: "Sign up for home insurance and get a free home inspection",
      expiry: "2024-08-15",
      image:
        "https://cdn.vectorstock.com/i/1000v/78/29/life-insurance-offer-landscape-banner-design-vector-42797829.jpg",
    },
    {
      id: "3",
      title: "20% Discount on Life Insurance",
      description: "Limited time offer: 20% off on all life insurance plans",
      expiry: "2025-01-26",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SjymntRZwvlmziVivz_Y3mWY0tdOta0AsiPdqv3Nq1BDXBpMl4iQeVWlk6PgmcymjZY&usqp=CAU",
    },
    {
      id: "4",
      title: "Bundle and Save 25%",
      description:
        "Save 25% when you bundle your home and auto insurance policies",
      expiry: "2024-01-31",
      image:
        "https://sunway-eins.com.my/wp-content/uploads/2023/06/tune-motor-easy.jpg",
    },
    {
      id: "5",
      title: "First Month Free on Health Insurance",
      description:
        "New customers get their first month of health insurance coverage for free",
      expiry: "2025-02-06",
      image:
        "https://assets-us-01.kc-usercontent.com/f1197727-f2d1-007e-d14d-0d4983462947/9c199333-44f4-4829-a73a-9707da8bc747/Health-promo-450x375_website-promo.gif",
    },
    {
      id: "6",
      title: "10% Senior Citizen Discount",
      description:
        "Seniors aged 65 and above get 10% off on all insurance policies",
      expiry: "No Expiry",
      image:
        "https://www.greaterkashmir.com/wp-content/uploads/2023/08/seniro_citizen.jpg",
    },
    // Add more offers as needed
  ];

  const renderOfferItem = ({ item }) => (
    <TouchableOpacity style={styles.offerItem}>
      <Image source={{ uri: item.image }} style={styles.offerImage} />
      <View style={styles.offerContent}>
        <View style={styles.offerTitleContainer}>
          <Entypo
            name="price-ribbon"
            size={24}
            color="#79136D"
            style={styles.offerIcon}
          />
          <Text style={styles.offerTitle}>{item.title}</Text>
        </View>
        <Text style={styles.offerDescription}>{item.description}</Text>
        <Text style={styles.offerExpiry}>Expires: {item.expiry}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top-Header View Customized */}
      <View style={styles.headerContent}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
      </View>

      <FlatList
        data={offers}
        renderItem={renderOfferItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.offersList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACACB0",
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontFamily: "outfit-bold",
    fontSize: 20,
    marginLeft: 40,
  },
  offersList: {
    padding: 16,
  },
  offerItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#79136D",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  offerImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  offerContent: {
    padding: 16,
  },
  offerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#79136D",
    fontFamily: "outfit-bold",
  },
  offerDescription: {
    fontSize: 14,
    color: Colors.PRIMARY,
    marginBottom: 8,
    fontFamily: "outfit-bold",
  },
  offerExpiry: {
    fontSize: 12,
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
});

export default MyOffers;
