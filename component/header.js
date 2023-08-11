import React, { useCallback, useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Header({activePage, switchPage , headerCaption , setHeader, toggleMenu }) {



  const [isLoaded] = useFonts({
    Calligraffitti: require("./../assets/fonts/Calligraffitti.ttf"),
    Carattere: require("./../assets/fonts/Carattere.ttf"),
    BadScript: require("./../assets/fonts/BadScript.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  const setPage = () => {
    if (activePage > 1){
      switchPage(--activePage);      
    } else {
      switchPage(1);
      setHeader("Home page");
    }   
  }


  return (
    <View style={styles.titlepage} onLayout={handleOnLayout}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPage()}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.logo}
            source={ activePage > 1 ? require('./../assets/img/back.png') : require('./../assets/img/crown.png')} />
        </View>

        </TouchableOpacity>
        <Text style={styles.title}>{headerCaption}</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.userContainer}>
          <Image
            style={styles.logo}
            source={require('./../assets/img/woman.png')} />
        </TouchableOpacity>

      </View>


      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  titlepage: {
    width: "100%",
    paddingTop: 20,
    backgroundColor: "black",
    color: "white",
  },

  header: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 5,
    backgroundColor: "black",
    color: "white",
    borderBottomColor: "#ff0000",
    borderBottomWidth: 3,
  },
  title: {
    fontFamily: "BadScript",
    textAlign: "center",
    color: "#fff",
    fontSize: 28,
    marginTop: 5
  },
  logoname: {
    fontFamily: "Calligraffitti",
    textAlign: "center",
    color: "#ff0000",
    fontSize: 48,
  },
  buttonContainer: {
    margin: 30,
  },
  userContainer:{
    padding: 3,
    margin:2,
    right: 0,    
    position: "absolute",
    borderColor: "#ff0000", 
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "dotted"

  },
  imgContainer:{
    padding: 5    
  },
  logo:{    
    width: 38,
    height: 40,
  },


});
