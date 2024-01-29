import React from 'react'
import { Button, Text, View } from 'react-native'


export const Login = ({navigation}) => {
  return (
    <View>
<Text> Login </Text>
<Button title="Sign In" onPress={()=>navigation.navigate("Register")}/>
    </View>
  )
}
