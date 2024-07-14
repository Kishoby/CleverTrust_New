import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

const NotificationPage = () => {
  const navigation = useNavigation();

  const [notifications, setNotifications] = useState([
    { id: '1', type: 'policy', title: 'Policy Renewal', message: 'Your auto insurance policy is due for renewal in 30 days.', time: '2 hours ago' },
    { id: '2', type: 'claim', title: 'Claim Update', message: 'Your recent claim has been approved. Payment will be processed within 5-7 business days.', time: '1 day ago' },
    { id: '3', type: 'payment', title: 'Payment Received', message: 'We have received your monthly premium payment. Thank you!', time: '3 days ago' },
    { id: '4', type: 'offer', title: 'New Offer Available', message: 'Check out our new bundled home and auto insurance package for great savings!', time: '1 week ago' },
    { id: '5', type: 'policy', title: 'Policy Update', message: 'We\'ve updated our terms of service. Please review the changes.', time: '2 weeks ago' },
  ]);

  const getIconName = (type) => {
    switch (type) {
      case 'policy': return 'document-text-outline';
      case 'claim': return 'clipboard-outline';
      case 'payment': return 'card-outline';
      case 'offer': return 'gift-outline';
      default: return 'notifications-outline';
    }
  };

  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <View style={styles.iconContainer}>
        <Ionicons name={getIconName(item.type)} size={24} color="#910989" />
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      

      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.notificationsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ACACB0",
  
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#C6C6C8',
    backgroundColor: 'white',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationsList: {
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#3C3C43',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
});

export default NotificationPage;