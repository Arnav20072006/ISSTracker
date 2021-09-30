import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';
import ISSInfo from './ISSInfo';

export default class ISSLocationScreen extends Component{
    constructor(){
        super()
     this.state = {
        location : {}
     }
    }

    componentDidMount(){
       this.getIssLocation() 
    }


     getIssLocation =()=>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({location : response.data})
        })
        .catch(error=>{
            alert(error.message)
        })
     }


    render(){
         if(Object.keys(this.state.location).length===0){
            return(
                <View style = {styles.loadingContainer}>
                 <Text style = {styles.loadingText}>Loading....</Text>
                </View>
            )
         }
         else{
            return(
                <View style = {styles.container1}>
                    <SafeAreaView
                      style = {styles.androidSafeArea}
                    ></SafeAreaView>
                <ImageBackground
                source = {require("../assets/iss_bg.jpg")}
                style  = {styles.backgroundImage}
                >
                 <View style = {styles.titleBar}>
                  <Text style = {styles.titleText}>ISSLocationScreen</Text>
                  </View>
                 <View style = {styles.mapContainer}>
                   <MapView style = {styles.map}
                   region={{
                    latitude : this.state.location.latitude,
                    longitude : this.state.location.longitude,
                    latitudeDelta: 100,
                    longitudeDelta: 100,
                  }}
                   >
                   <Marker coordinate={{ latitude:this.state.location.latitude, longitude: this.state.location.longitude }}> 
                   <Image 
                   source={require("../assets/iss_icon.png")} 
                   style={{height:50,width:50}}> 
                   </Image> 
                   </Marker>

                  </MapView>
                </View>
                <ISSInfo/> 
               </ImageBackground>
               </View>
            )
         }
        
    }
}

const styles = StyleSheet.create({
    container1 : {
        flex : 1
    },
    androidSafeArea : {
            marginTop   : Platform.OS === "android" ? StatusBar.currentHeight : 0
          },
    backgroundImage : {
        resizeMode : 'cover',
        flex : 1
    },
    titleText : {
        fontSize   : 40,
        fontWeight : "bold",
        color      : "white"
    },
    titleBar : {
        justifyContent : "center",
        alignItems     : "center",
        flex           : 0.15
    },
    mapContainer : {
        flex : 0.6
    },
    map : {
        width : "100%",
        height : "100%"
    },
    loadingText : {
        color : "black",
        fontSize : 20
    },
    loadingContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    infoContainer : {
        flex : 0.2,
        backgroundColor : 'white',
        marginTop : -10,
        padding : 30,
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30
    },
    infoText : {
        fontSize : 15,
        color : 'black',
        fontWeight : "bold"
    }
})