import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CourseItem({item , pressHandler}) {
        return (
            <TouchableOpacity onPress={() => pressHandler(item)}>
                <View style={styles.item}>

                <MaterialIcons name='school' size={48} color={"#ff0000"} style={styles.icon}/>

                <View style={styles.textHolder}>
                    <Text style={styles.itemText}>{item.courseName}</Text>
                    <Text style={styles.itemText}>{item.courseCategory}</Text>
                    <Text style={styles.itemText}>{item.courseAuthor}</Text>
                </View>
                </View>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop:16,
        borderColor:"#ff0000",
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 10,
        flexDirection: 'row'
        
    },
    textHolder:{

    },
    itemText:{
        marginLeft: 10 ,
        color: "white", 
    },
    icon:{
        padding: 5,
        borderColor:"#ff0000",
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 5,
        textAlign: 'center'
    }
})