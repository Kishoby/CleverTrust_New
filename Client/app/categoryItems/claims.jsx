import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Claims = () => {



  const CategoryListItems = [
    { 
        id: '1', 
        title: 'Request a Claim', 
        icon: 'request-quote',
        library: 'MaterialIcons',  
        path:'/claims/request-claim' 
    },
    { 
        id: '2', 
        title: 'My Claims', 
        icon: 'hand-holding-usd',
        library: 'FontAwesome5',  
        path:'/claims/my-claims'
    },

  ];

  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View>
      {/* Top-Header View Customized  */}
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          height: 100,
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginLeft: 20,
            marginTop: 40,
            display: "flex",
            flexDirection: "row",
            gap: 40,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}
          >
            Claims & Recovering
          </Text>
        </View>
      </View>
      {/* Top-Header View Customized  */}
      <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://www.dahsing.com/img/credit_card/cc_top_ins.jpg",
            }}
            style={{
              width: "94%",
              height: 160, // Adjust height as per your requirement
              borderRadius: 10,
              marginBottom: 10,
              padding: 10,
              marginTop: 20,
            }}
            resizeMode="cover"
          />
        </View>
      <View style={{
        marginTop:0
      }}>
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

                
                {item.library === 'MaterialCommunityIcons' && (
                  <MaterialCommunityIcons name={item.icon} size={90} color="#217482" />
                )}
                {item.library === 'MaterialIcons' && (
                  <MaterialIcons name={item.icon} size={90} color="#519BC0" />
                )}
                {item.library === 'FontAwesome5' && (
                 <FontAwesome5 name={item.icon} size={90} color="#519BC0" />
                )}


                <Text style={{
                    fontFamily:'outfit-bold',
                    color:"#fff",
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

export default Claims