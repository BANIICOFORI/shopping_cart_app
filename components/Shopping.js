import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, Feather, Entypo, MaterialCommunityIcons, SimpleLineIcons, EvilIcons } from "@expo/vector-icons";

const Shopping = () => {
  return (
    <View style={styles.container}>
            <View style={styles.SuccessfulContainer}>
            <Text style={styles.SuccessfulText}>ONLINE SHOPPING</Text>
            </View>
            <View>
            <Text style={styles.mainText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                 purus lectus malesuada libero, sit amet commodo magna eros quis urna.
            </Text>
          </View>
          <View>
                <Image style={styles.Image} source={require("../assets/online-shopping-n57.jpg")} />  
            </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
    
        </View>
        <View style={styles.buttonContainerNext}>
        <TouchableOpacity style={styles.buttonNext1}>
            <Text style={styles.buttonnextText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNext}>
            <Text style={styles.buttonnextText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNext3}>
            <Text style={styles.buttonnextText}>3</Text>
          </TouchableOpacity>
            
          <View ><Text style={styles.privious}>Skip</Text></View>   
        </View>
            
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection:"column",
        flexDirection:"column",
        borderRadius:20,
        marginTop:50,
        backgroundColor:"#fffaf0",
        marginHorizontal:20,

    },
    Image: {
      width: 300,
      height: 300,
      marginHorizontal: 10,
      marginVertical:20,
       alignSelf: "center",
      borderRadius: 15,
       
    },
    SuccessfulContainer: {
        marginTop:50,
        marginVertical:5,
        marginBottom:2,
        marginHorizontal:20
      },
      LoginHeader: {
        fontSize: 20,
        color: "#5082d9",
        fontWeight: "bold",
        height: 70,
      },

      buttonContainer: {
        width:190,
        height: 60,
        backgroundColor: "#6a5acd",
        justifyContent: "center",
        // alignItems: "center",
        borderRadius: 30,
        marginVertical:20,
        alignSelf:"center",
       // marginHorizontal:50
      },
      buttonText :{
        fontSize:25,
        color:"white",
        fontWeight:"bold",
        justifyContent:"center",
        alignSelf:"center",
        //marginVertical:20,
      },
      SuccessfulText:{
        fontSize:26,
        fontWeight:"bold",
       
      },
      mainText :{
        fontSize:16,
        fontWeight:"normal",
        marginHorizontal:20
       
      },
      mainTextContainer:{
        flex:1,
        marginHorizontal:5,
        marginVertical:5,
      },
      buttonContainerNext: {
        flexDirection:"row",
        justifyContent: "center",
        //  flex:1,
        alignItems:"center",
        marginVertical:50,
        marginHorizontal:20

      },
      buttonNext: {
        width:20,
        height:14,
        backgroundColor: "#a9a9a9",
        borderRadius: 20,
        marginVertical:5,
        marginHorizontal:5
      },
      buttonNext1:{
        width:20,
        height:14,
        backgroundColor: "#6a5acd",
        borderRadius: 20,
        marginVertical:5,
        marginLeft:120
      },
      buttonNext3:{
        width:25,
        height:14,
        backgroundColor: "#a9a9a9",
        borderRadius: 20,
        marginVertical:5,
        marginRight:80
      },
      buttonnextText :{
        fontSize:8,
        marginVertical:5,
        justifyContent:"center",
       textAlign:"center",
        color:"white",
        fontWeight:"bold"
      },
      privious:{
        // marginLeft:15,
        fontSize:18,
        // textAlign:"Right"
      },
});


export default Shopping