import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MessageCard from '@/src/component/molecules/messageCard'
import imagesPath from '@/src/constants/imagesPath'
import Entypo from '@expo/vector-icons/Entypo'
import { moderateScale, scale } from 'react-native-size-matters'

const Status = () => {
  const data = [{
    image: imagesPath.reactlogo,
    name: "John Doe",
    description: "10 minutes ago",
  },
  {
    image: imagesPath.splashIcon,
    name: "Jane Smith",
    description: "Today, 6:00am",
  },
  {
    image: imagesPath.welcomeimg,
    name: "Michael Johnson",
    description: "Yesterday, 7:15am",
  },
  {
    image: imagesPath.logo,
    name: "Emily Davis",
    description: "4 hours ago", 
  },
  ]
  return (
    
    <View style={{ backgroundColor: "#fff", gap: scale(20) }}>

      <MessageCard 
            image={imagesPath.reactlogo} 
            name={"Herry"} 
            description={"Tap to add status update " }
            logoComponent={<View style={styles.logoComponent}>
              <Entypo name="plus" size={20} color="black" />
            </View>} 
          />

      <FlatList 
        data={data} 
        renderItem={({ item }) => (
          <MessageCard 
            image={item.image} 
            name={item.name} 
            description={item.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  logoComponent: {
    position:"absolute",
    backgroundColor: "#05AA82",
    borderRadius: moderateScale(50),
    bottom: -1,
    right: -1,
    borderWidth: moderateScale(2),
   },
})