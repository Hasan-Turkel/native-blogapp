import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Linking } from 'react-native';

export const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This blog has been developed by Hasan Turkel who is a full-stack
        developer.
      </Text>
      <Text style={styles.text}>For Contact</Text>

      <View style={styles.iconContainer}>
      <Entypo name="linkedin" size={36} color="#0d6efd"  onPress={() => Linking.openURL('https://www.linkedin.com/in/hasan-turkel/')}/>
      <AntDesign name="github" size={36} color="black" onPress={() => Linking.openURL('https://github.com/Hasan-Turkel')}/>
      <MaterialCommunityIcons name="gmail" size={36} color="red" onPress={() => Linking.openURL('mailto:mhturkel@gmail.com')}/>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
  },
  text: {
   textAlign:"center",
   fontSize:25
  },
  iconContainer:{
flexDirection:"row",
gap:20,
justifyContent:"space-evenly"
  }
 
});
