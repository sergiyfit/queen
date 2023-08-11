import React, { useCallback } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function TitlePage({ switchPage }) {
  const [isLoaded] = useFonts({
    Calligraffitti: require("./../assets/fonts/Calligraffitti.ttf"),
    Carattere: require("./../assets/fonts/Carattere.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.titlepage} onLayout={handleOnLayout}>
      <Text style={styles.title}>Queen</Text>
      <Text style={styles.logoname}>Lolia Zirael</Text>

      <View style={styles.imgContainer}>
      <Image 
        style={styles.logo}
        source={require('./../assets/img/crown.png')}
        />
      </View>

      <Text style={styles.title}>Education</Text>
      <Text style={styles.title}>Platform</Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => switchPage(1)}
          title="Start"
          color="red"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titlepage: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    backgroundColor: "black",
    color: "white",
  },
  title: {
    fontFamily: "Carattere",
    textAlign: "center",
    color: "#fff",
    fontSize: 36,
  },
  logoname: {
    fontFamily: "Calligraffitti",
    textAlign: "center",
    color: "red",
    fontSize: 48,
  },
  buttonContainer: {
    margin: 30,
  },
  imgContainer:{
    width: "100%", 
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center", 
    
  },
  logo:{    
    width: 200,
    height: 215,
  }
});
