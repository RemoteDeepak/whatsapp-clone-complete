import { FlatList, StyleSheet,Text, View } from 'react-native'
import React from 'react'
import MessageCard from '../../component/molecules/messageCard'
import imagesPath from '../../constants/imagesPath'

const Chat = () => {
  const data = [{
    image: imagesPath.reactlogo,
    name: "John Doe",
    description: "Hello, how are you?",
    time: "5:27am",
    badge: 1,
  },
  {
    image: imagesPath.splashIcon,
    name: "Jane Smith",
    description: "Are you coming to the party?",
    time: "6:00am",
    badge: 4,
  },
  {
    image: imagesPath.welcomeimg,
    name: "Michael Johnson",
    description: "Let's catch up later.",
    time: "7:15am",
    badge: 0,
  },
  {
    image: imagesPath.logo,
    name: "Emily Davis",
    description: "Don't forget the meeting tomorrow.",
    time: "8:30am",
    badge: 0,
  },
  ]
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <FlatList 
        data={data} 
        renderItem={({ item }) => (
          <MessageCard 
            image={item.image} 
            name={item.name} 
            description={item.description} 
            time={item.time} 
            badge={item.badge} 
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})