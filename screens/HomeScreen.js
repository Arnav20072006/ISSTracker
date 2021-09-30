import React, {Component} from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.androidSafeArea}/>
                <ImageBackground
                source = {require("../assets/bg_image.png")}
                style = {styles.backgroundImage}
                >
                <View style = {styles.titleBar}>
                    <Text style = {styles.titleText}>ISS Tracker App</Text>
                </View>
    
              <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("ISSLocation")}>
                  <Text style = {styles.routeText}>ISS Location</Text>
                  <Text style = {styles.knowMore}>{"Know More --->"}</Text>
                  <Text style = {styles.bgDigit}>1</Text>
                  <Image
                  source = {require('../assets/iss_icon.png')}
                  style  = {styles.iconImage}
                  >
                  </Image>
              </TouchableOpacity>
              
              <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("Meteor")}>
                  <Text style = {styles.routeText}>Meteors</Text>
                  <Text style = {styles.knowMore}>{"Know More --->"}</Text>
                  <Text style = {styles.bgDigit}>2</Text>
                  <Image
                  source = {require('../assets/meteor_icon.png')}
                  style  = {styles.iconImage}
                  >
                  </Image>
              </TouchableOpacity>
              </ImageBackground>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleText : {
      fontSize   : 40,
      fontWeight : "bold",
      color      : "white"
    },
    androidSafeArea : {
      marginTop : Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar : {
        justifyContent : "center",
        alignItems     : "center",
        flex           : 0.15
    },
    routeCard : {
      marginLeft      : 50,
      marginRight     : 50,
      marginTop       : 50,
      borderRadius    : 30,
      backgroundColor : "white",
      flex            : 0.25
    },
    routeText : {
      fontSize    : 30,
      fontWeight  : 'bold',
      color       : "black",
      marginTop   : 30,
      paddingLeft : 30
    },
    backgroundImage : {
      resizeMode : "cover",
      flex       : 1
    },
    knowMore : {
      paddingLeft : 30,
      color       : "black",
      fontSize    : 15
    },
    bgDigit : {
      color    : "black",
      position : 'absolute',
      right    : 20,
      bottom   : -15,
      fontSize : 150,
      zIndex   : -1
    },
    iconImage : {
      width      : 200,
      height     : 200,
      position   : 'absolute',
      right      : 20,
      top        : -80,
      resizeMode : 'contain'
    }
  });