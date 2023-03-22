import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const WomensJacketList = () => {
    
  return (
      <View style={styles.container}>
          <View style={styles.Heading}>
              <Text style={styles.HeadingText}>Womens Jacket</Text>
          </View>
          <View>
              <View>
                  <Image style={styles.Image} source={require("../src/screens/AddToCart")} />
              </View>
          </View>
      </View>
  )
}

export default WomensJacketList;

const styles = StyleSheet.create({
  container:{
    padding: 10,
    justifycontent:"center",
  },
  Image: {
    width: 200,
    height: 150,
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: "flex-start",
 
},
Heading: {
    marginHorizontal: 10,
    marginTop:80,
    marginBottom:20,

},
HeadingText:{
    fontSize:30,
    fontWeight:"bold",
    marginHorizontal:20,

},
});