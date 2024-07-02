import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Button, 
  Linking,
  SafeAreaView,
  FlatList
} from 'react-native';
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";

const CustomerSupport = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [issueName, setIssueName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const faqs = [
    { question: "How do I file a claim?", answer: "You can file a claim through our mobile app or by calling our claims hotline at 1-800-XXX-XXXX." },
    { question: "What documents do I need for a claim?", answer: "Typically, you'll need your policy number, incident details, and any relevant photos or police reports." },
    { question: "How long does it take to process a claim?", answer: "Most claims are processed within 5-7 business days, but complex cases may take longer." },
  ];

  const handleSubmitIssue = () => {
    console.log('Submitting issue:', { issueName, issueDescription });
    setIssueName('');
    setIssueDescription('');
  };

  const renderFaqItem = ({ item }) => (
    <View style={styles.faqItem}>
      <Text style={styles.faqQuestion}>{item.question}</Text>
      <Text style={styles.faqAnswer}>{item.answer}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Top-Header View Customized  */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Customer Support</Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}

      <ScrollView style={styles.container}>
        {/* Contact Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <TouchableOpacity style={styles.contactOption} onPress={() => Linking.openURL('tel:1800XXXXXXX')}>
            <Ionicons name="call-outline" size={24} color={Colors.PRIMARY} />
            <Text style={styles.contactText}>Call Customer Service</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactOption} onPress={() => Linking.openURL('mailto:support@insuranceapp.com')}>
            <Ionicons name="mail-outline" size={24} color={Colors.PRIMARY} />
            <Text style={styles.contactText}>Email Support</Text>
          </TouchableOpacity>
        </View>

        {/* FAQs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <FlatList
            data={faqs}
            renderItem={renderFaqItem}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>

        {/* Submit an Issue */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Submit an Issue</Text>
          <TextInput
            style={styles.input}
            placeholder="Issue Name"
            value={issueName}
            onChangeText={setIssueName}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Describe your issue"
            value={issueDescription}
            onChangeText={setIssueDescription}
            multiline
            numberOfLines={4}
          />
          <Button title="Submit Issue" onPress={handleSubmitIssue} color={Colors.PRIMARY} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    flex: 1,
    padding: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.PRIMARY,
  },
  faqItem: {
    marginBottom: 15,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default CustomerSupport;