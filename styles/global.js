import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },     
      workspace:{
        flex: 1,
        width: "100%",
        backgroundColor: "black"
      },
      bluespace:{
        flex: 1,
        width: "100%",
        backgroundColor: "aqua"
      },
      menu: {
        position: 'absolute',
        // flex:1, 
        top: 75,
        right: 10,
        padding: 5,
        backgroundColor: '#990000',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "red",
        elevation: 3,
        zIndex: 500
      },
      menuItem:{
        padding: 10,
        margin:3,
        backgroundColor: 'black',
        color: "white",
        borderRadius: 5
      }
});