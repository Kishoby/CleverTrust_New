import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ProfilePage = () => {
  const navigation = useNavigation();

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+94 761481559",
    policyNumber: "POL-1234567890",
    profileImage:
      "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png",
  };

  const QuickActionButton = ({ icon, label, onPress }) => (
    <TouchableOpacity style={styles.quickActionButton} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#007AFF" />
      <Text style={styles.quickActionLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        

        <View style={styles.profileSection}>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={20} color="#007AFF" />
            <Text style={styles.infoText}>{user.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <Ionicons name="document-text-outline" size={20} color="#007AFF" />
            <Text style={styles.infoText}>
              Policy Number: {user.policyNumber}
            </Text>
          </View>
        </View>

        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsRow}>
            <QuickActionButton
              icon="document-text-outline"
              label="My Policies"
              onPress={() => {
                /* Navigate to Policies */
              }}
            />
            <QuickActionButton
              icon="clipboard-outline"
              label="File a Claim"
              onPress={() => {
                /* Navigate to Claims */
              }}
            />
            <QuickActionButton
              icon="card-outline"
              label="Payments"
              onPress={() => {
                /* Navigate to Payments */
              }}
            />
          </View>
        </View>

        <View style={styles.additionalOptionsSection}>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons
              name="shield-checkmark-outline"
              size={24}
              color="#007AFF"
            />
            <Text style={styles.optionText}>Privacy & Security</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#C7C7CC"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="notifications-outline" size={24} color="#007AFF" />
            <Text style={styles.optionText}>Notifications</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#C7C7CC"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="help-circle-outline" size={24} color="#007AFF" />
            <Text style={styles.optionText}>Help & Support</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#C7C7CC"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#C6C6C8",
    backgroundColor: "white",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  editButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  infoSection: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  quickActionsSection: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  quickActionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickActionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
  },
  quickActionLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  additionalOptionsSection: {
    backgroundColor: "white",
    marginTop: 20,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
});

export default ProfilePage;
