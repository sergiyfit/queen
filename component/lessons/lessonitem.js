import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function LessonItem({item , pressLesson}) {
        return (
            <TouchableOpacity onPress={() => pressLesson(item)}>
                <View style={styles.item}>

                <MaterialIcons name='extension' size={48} color={"#ff0000"} style={styles.icon}/>

                <View style={styles.textHolder}>
                    <Text style={styles.itemText}>{item.lessonName}</Text>
                    <Text style={styles.itemText}>{'Author: ' + item.lessonAuthor}</Text>
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
        paddingRight: 50 ,         
        paddingLeft: 10 ,         
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