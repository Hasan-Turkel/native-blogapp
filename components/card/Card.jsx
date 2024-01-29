import React from "react";
import { Button, Image, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import { Octicons } from '@expo/vector-icons';

import styles from "./Card.style";

const Card = ({ blog, navigation }) => {
 const user = true
  return (
   
      <View style={styles.container}>
          <Image
        style={styles.image}
        source={{
          uri: blog?.image
        }}
      />
        <Text style={styles.title}>{blog?.title}</Text>
        <Text >{blog?.content.slice(0, 20)}...</Text>
        <Text >{blog?.publish_date}</Text>
        <View style={styles.authorContainer}>
        <Ionicons name="person" size={24} color="black" />
        <Text >{blog?.author}</Text>
        </View>
        <View style={styles.reactionContainer}>
        <Ionicons name="heart" size={24} color="black" />
        <Text >{blog?.likes}</Text>
        <Octicons name="comment" size={24} color="black" />
        <Text >{blog?.comment_count}</Text>
        <Ionicons name="eye-outline" size={24} color="black" />
        <Text >{blog?.post_views}</Text>
        </View>
        {user &&  <Button
  onPress={()=>navigation.navigate("Detail")}
  title="Read More"
/>}
       
        
      </View>
  );
};

export default Card;
