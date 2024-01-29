import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical:10,
    width: (Dimensions.get('screen').width),
    height: (Dimensions.get('screen').height)/4,
  },
  text: {
    textAlign:"center",
    backgroundColor:"#000000a0",
    color: 'white',
    fontSize: 30,  
  },

  image: {
   flex:1,
   justifyContent:"flex-end"
  },
});
