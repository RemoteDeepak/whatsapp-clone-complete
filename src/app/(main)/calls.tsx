import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagesPath from '@/src/constants/imagesPath'
import MessageCard from '@/src/component/molecules/messageCard'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { moderateScale, scale } from 'react-native-size-matters';

const Calls = () => {
  const data = [{
    image: imagesPath.reactlogo,
    name: "John Doe",
    description: "Hello, how are you?",
    iconCall: <FontAwesome name="video-camera" style={styles.iconStyle} />
  },
  {
    image: imagesPath.splashIcon,
    name: "Jane Smith",
    description: "Are you coming to the party?",
  },
  {
    image: imagesPath.welcomeimg,
    name: "Michael Johnson",
    description: "Let's catch up later.",
  },
  {
    image: imagesPath.logo,
    name: "Emily Davis",
    description: "Don't forget the meeting tomorrow.",
  },
  ]
  return (
    <View style={{ backgroundColor: "#fff",}}>
      <FlatList 
        data={data} 
        renderItem={({ item }) => (
          <MessageCard 
            image={item.image} 
            name={item.name} 
            description={item.description}
            RightIcon={item.iconCall} 
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  iconStyle: { 
    justifyContent: "center",
    alignItems: "center",
    color: "#05AA82",
    fontSize: moderateScale(25),
    height: moderateScale(50),
  }
})