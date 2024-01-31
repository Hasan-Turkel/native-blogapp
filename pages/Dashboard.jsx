import  { useCallback } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import useBlogCalls from "../hooks/useBlogCalls";
import Card from "../components/blog/card";
import { useSelector } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';

export const Dashboard = ({navigation}) => {

  const { user } = useSelector((state) => state.auth)

  const { loading, err, data:blogs, getData } = useBlogCalls();
  renderItem = ({ item }) => <Card blog={item} navigation={navigation}  />;

  useFocusEffect(
        useCallback(() => {
          // Do something when the screen is focused
          getData()
          
        }, [])
      );
  
// console.log(blogs);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={blogs}
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