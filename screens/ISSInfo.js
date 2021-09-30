import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';

export default class ISSInfo extends Component{
    constructor(){
        super()
     this.state = {
        location : {}
     }
    }

    componentDidMount(){
       this.getIssLocation()
       
       try{
         setInterval(async()=>{
           this.getIssLocation()
         },5000)
       }
       catch(error){
           console.log(error.message)
       }
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
       return(
        <View style = {styles.infoContainer}>
            <Text style = {styles.infoText}>Latitude : {this.state.location.latitude}</Text>
            <Text style = {styles.infoText}>Longitude : {this.state.location.longitude}</Text>
            <Text style = {styles.infoText}>Altitude(km) : {this.state.location.altitude}</Text>
            <Text style = {styles.infoText}>Veloccity(km/h) : {this.state.location.velocity}</Text>
        </View>
       )
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