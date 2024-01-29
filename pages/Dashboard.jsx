import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import useBlogCalls from "../hooks/useBlogCalls";
import Card from "../components/card";

export const Dashboard = ({navigation}) => {

  const user = true

  const { loading, err, data } = useBlogCalls();
  renderItem = ({ item }) => <Card blog={item} navigation={navigation} />;

  console.log(data);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
      />
      {!user && <Button title="Sign Up" color="#86ecec" onPress={()=>navigation.navigate("Login")}/>}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
  list: {
    flex: 1,
  },
});