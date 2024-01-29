import React from "react";
import styles from "./MealCard.style";
import { ImageBackground, Text, TouchableWithoutFeedback, View } from "react-native";
const MealCard = ({meal, navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() =>
        navigation.navigate("detail", { meal: meal.idMeal })
      }
    >
      <View style={styles.container}>
      <ImageBackground source={{uri: meal.strMealThumb}} style={styles.image}>
      <Text style={styles.text}>{meal.strMeal}</Text>
    </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
