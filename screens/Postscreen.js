import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Postscreen extends Component{
      constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

 async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

render(){
      if (!this.props.route.params) {
      this.props.navigation.navigate("Home");
    } else if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
    
      return(
        <View style={StyleSheet.container}>
           <SafeAreaView style={styles.droidSafeArea} />
           <Image 
           source={require(this.route.params.pics.pic)}
           style={styles.image}
           ></Image>
           <Text style={styles.caption}>{this.params.pics.author}</Text>
        </View>
      )
    
    }
}


}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  image:{
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: "contain"
  },
  caption:{
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white"
  }
})