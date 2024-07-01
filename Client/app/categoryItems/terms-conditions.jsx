import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Colors = {
  PRIMARY: '#1D284C', 
}

const TermsAndConditions = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            Terms & Conditions
          </Text>
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.paragraph}>
          Welcome to our insurance app. By using this application, you agree to the following terms and conditions:
        </Text>
        <Text style={styles.paragraph}>
          1. This app is for informational purposes only and does not constitute a legally binding insurance contract.
        </Text>
        <Text style={styles.paragraph}>
          2. You must provide accurate and up-to-date information when using this app.
        </Text>
        <Text style={styles.paragraph}>
          3. We reserve the right to modify these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.
        </Text>
        <Text style={styles.paragraph}>
          4. Your personal data will be handled in accordance with our Privacy Policy.
        </Text>
        <Text style={styles.paragraph}>
          5. The app may collect usage data to improve our services and user experience.
        </Text>
        <Text style={styles.paragraph}>
          6. You are responsible for maintaining the confidentiality of your account information.
        </Text>
        <Text style={styles.paragraph}>
          7. We are not liable for any losses or damages resulting from the use of this app.
        </Text>
        <Text style={styles.paragraph}>
          8. Any disputes arising from the use of this app will be resolved according to the laws of [Your Jurisdiction].
        </Text>
       
       
        <Text style={styles.text} >
          Learn more 
        </Text>
       
      </ScrollView>
    </View>
  )
}

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
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'outfit-bold', 
    fontSize: 20,
    marginLeft: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#444',
    fontFamily: 'outfit', 
    
  },
  text: {
    fontFamily: "outfit-bold"
  },
})

export default TermsAndConditions;