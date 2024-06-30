import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';

const Sliders = () => {

  const SliderList = [
    
      {
        image: require("../../assets/images/slider3.png"),
        caption: "Slide 1 Caption",
      },
      {
        image: require("../../assets/images/slider2.png"),
        caption: "Slide 2 Caption",
      },
      {
        image: require("../../assets/images/slider1.png"),
        caption: "Slide 3 Caption",
      },
      {
        image: require("../../assets/images/slider4.png"),
        caption: "Slide 2 Caption",
      },
      {
        image: require("../../assets/images/slider5.png"),
        caption: "Slide 3 Caption",
      },
    ];
  


  return (
    <View style={{
     
    }}>
    <Text style={{
        fontFamily:'outfit-bold',
        fontSize:16,
        paddingLeft:20,
        paddingTop:15,
        marginBottom:5


    }}>
         Flash Deals
    </Text>

    <FlatList
        data={SliderList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
            paddingLeft:20,

        }}
        renderItem={({item,index})=>(
            <Image source={item.image}
                style={{
                    width:200,
                    height:100,
                    borderRadius:15,
                    marginRight:15,
                    shadowColor:Colors.PRIMARY
                  
                    }}
            />
            
        )}
    />
    

  
</View>
  )
}

export default Sliders