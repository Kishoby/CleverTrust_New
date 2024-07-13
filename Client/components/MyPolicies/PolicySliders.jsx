import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from '@/constants/Colors';

const policies = [
  {
    key: '1',
    name:"B. Gobihanath",
    policyNo: '00409712',
    insurancePremium: 'LKR 1,088.00',
    policyStatus: 'Active',
    policyCommenceDate: '2008-08-28',
    premiumMaturityDate: '2023-08-28',
    premiumPayingTerm: '15',
    sumAssured: 'LKR 100,000.00',
    accountBalance: 'LKR 0.00',
    excessBalance: 'LKR 2,321.66',
    amountDue: 'LKR 22,917.10',
    paidUpDate: '2019-04-28',
  },
  {
    key: '2',
    name:"Kishoby Sriranjan",
    policyNo: '00409713',
    insurancePremium: 'LKR 1,500.00',
    policyStatus: 'Active',
    policyCommenceDate: '2010-01-15',
    premiumMaturityDate: '2025-01-15',
    premiumPayingTerm: '15',
    sumAssured: 'LKR 200,000.00',
    accountBalance: 'LKR 0.00',
    excessBalance: 'LKR 3,500.00',
    amountDue: 'LKR 30,000.00',
    paidUpDate: '2020-01-15',
  },
  // Add more policies as needed
];

const renderItem = ({ item }) => {
  return (
    <ScrollView contentContainerStyle={styles.slide}>
   
      <View style={styles.policyCard}>
        <Text style={styles.policyTitle}>Clever Trust Insurance Pvt (Ltd)</Text>
        <Text style={styles.policyHolder}>{item.policyNo}</Text>
        <View style={{
          backgroundColor:Colors.PRIMARY,
          padding:10,
          paddingHorizontal:25,
          borderWidth:1.5,
         
          borderColor:"#fff",
          alignItems: 'center'
        }}>
        <Text style={styles.Name}>Name : {item.name}</Text>
        <Text style={styles.policyDetail}>Policy No: {item.policyNo}</Text>
        <Text style={styles.policyDetail}>Insurance Premium: {item.insurancePremium}</Text>
        </View>
      </View>
      <View style={styles.policyInfo}>
        <Text style={styles.policyInfoText}>Policy Status</Text>
        <Text style={styles.policyInfoValue}>{item.policyStatus}</Text>
        <Text style={styles.policyInfoText}>Policy Commence Date</Text>
        <Text style={styles.policyInfoValue}>{item.policyCommenceDate}</Text>
        <Text style={styles.policyInfoText}>Premium Maturity Date</Text>
        <Text style={styles.policyInfoValue}>{item.premiumMaturityDate}</Text>
        <Text style={styles.policyInfoText}>Premium Paying Term</Text>
        <Text style={styles.policyInfoValue}>{item.premiumPayingTerm}</Text>
        <Text style={styles.policyInfoText}>Sum Assured</Text>
        <Text style={styles.policyInfoValue}>{item.sumAssured}</Text>
        <Text style={styles.policyInfoText}>Account Balance</Text>
        <Text style={styles.policyInfoValue}>{item.accountBalance}</Text>
        <Text style={styles.policyInfoText}>Excess Balance</Text>
        <Text style={styles.policyInfoValue}>{item.excessBalance}</Text>
      </View>
     
    </ScrollView>
  );
};


const PolicySlider = () => {
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={policies}
      showNextButton={false}
      showDoneButton={false}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor:"#ACACB0",
    height: '100%',
    width: '100%',
  },
  policyCard: {
    width: '100%',
    padding: 20,
    paddingBottom:50,
    backgroundColor:Colors.PRIMARY,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    alignItems: 'center',
    marginBottom: 0,
    marginTop:60,
    
  },
  policyTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  policyHolder: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  Name:{
    fontSize: 16,
    fontFamily:"Outfit-bold",
    color: Colors.LIGHT,
    fontWeight: 'bold',

  },
  policyDetail: {
    fontSize: 14,
    color: Colors.LIGHT,
    fontWeight: 'bold',
    marginTop: 10,
  },
  policyValue: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 10,
  },
  policyInfo: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical:10,
    backgroundColor: '#FEFEFE',
    borderRadius: 10,
    marginBottom: 70,
    marginTop:-20
  },
  policyInfoText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  policyInfoValue: {
    fontSize: 16,
    color: "#690C60",
    
  },
  dotStyle: {
    backgroundColor: '#fff',
    width: 10,  // Adjust width as needed
    height: 10, // Adjust height as needed
    borderRadius: 5, // Make the dot circular
    marginHorizontal: 5,
    marginTop:30  
  },
  activeDotStyle: {
    backgroundColor: Colors.PRIMARY,
    width: 10,  // Adjust width as needed
    height: 10, // Adjust height as needed
    borderRadius: 6, // Make the dot circular
    marginHorizontal: 5,
    marginTop:30 // Adjust spacing between dots
  },
});

export default PolicySlider;
