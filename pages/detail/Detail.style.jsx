import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
  container: {
    padding: 10,
    gap:10,
    flex:1
  },
  image:{
    width:200,
    height:100,
    alignSelf:"center"
  },
  title:{
    fontSize:20,
    fontWeight:"bold"
  },
  authorContainer:{
    flexDirection: "row",
    gap:5
  },
  reactionContainer:{
    flexDirection: "row",
    gap:10
  },
  buttonContainer:{
    flexDirection:"row",
    gap:10,
    margin:5

  },
  commentContainer:{
    borderBottomWidth:1,
    margin:5,
    gap:5
  }

});
