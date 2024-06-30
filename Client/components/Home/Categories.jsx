import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router'




const Categories = () => {

  const router=useRouter();
  
  const CategoryListItems = [
    { 
        id: '1', 
        title: 'Policies', 
        icon: 'shield-account',
        library: 'MaterialCommunityIcons',  
        path:'/categoryItems/policy-details' 
    },
    { 
        id: '2', 
        title: 'Claims', 
        icon: 'hand-holding-usd',
        library: 'FontAwesome5',  
        path:'/categoryItems/claims'
    },
    { 
        id: '3', 
        title: 'Services', 
        icon: 'users', 
        library: 'FontAwesome5', 
        path:'/categoryItems/services' 
    },
    { 
        id: '4', 
        title: 'Payments', 
        icon: 'attach-money',
        library: 'MaterialIcons',  
        path:'/categoryItems/payments' 
    },
    { 
        id: '5', 
        title: 'Terms and Conditions', 
        icon: 'information-circle-sharp', 
        library: 'Ionicons', 
        path:'/categoryItems/terms-conditions' 
    },
    { 
        id: '6', 
        title: 'Locations', 
        library: 'Entypo', 
        icon: 'location', 
        path:'/categoryItems/location'
    },
  ];


  return (
    <View>
            <View style={{
                marginTop:20,
                marginHorizontal:20
            }}>
                <Text style={{
                    fontFamily:'outfit',
                    fontSize:16
                }}>How can we help you?</Text>
            </View>

            <View>
            <FlatList
                data={CategoryListItems}                
                keyExtractor={item => item.id}
                numColumns={2}
                vertical={true}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20,
                    marginBottom:150
                }}

                renderItem={ ({ item,index }) => (
                <TouchableOpacity style={{
                     backgroundColor:Colors.PRIMARY,
                     borderRadius:5,
                     width:150,
                     height:150,
                     margin:20
                }} 
                onPress={()=>router.push(item.path)}>
                <View style={{
                    padding:10,
                    alignItems:"center",
                    justifyContent: 'center'
                }}>

                {item.library === 'MaterialIcons' && (
                  <MaterialIcons name={item.icon} size={80} color="#2C72BE" />
                )}
                {item.library === 'MaterialCommunityIcons' && (
                  <MaterialCommunityIcons name={item.icon} size={90} color="#2875C9" />
                )}
                {item.library === 'Entypo' && (
                  <Entypo name={item.icon} size={80} color="#DCDCDC" />
                )}
                {item.library === 'FontAwesome' && (
                  <FontAwesome name={item.icon} size={90} color="#007aff" />
                )}
                {item.library === 'Ionicons' && (
                  <Ionicons name={item.icon} size={90} color="#DCDCDC" />
                )}
                {item.library === 'FontAwesome5' && (
                 <FontAwesome5 name={item.icon} size={90} color="#DCDCDC" />
                )}


                <Text style={{
                    fontFamily:'outfit-bold',
                    color:Colors.LIGHT,
                    fontSize:16,
                    marginTop:5
                }}>{item.title}</Text>
                </View>
                </TouchableOpacity>
  )}
      />
            </View>

    </View>
  )
}

export default Categories