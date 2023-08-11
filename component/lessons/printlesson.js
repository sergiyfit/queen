import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function PrintLesson({ activelesson }) {

    const [LessonLevel, setLessonLevel] = useState(['Новачок', 'Початківець', 'Середній рівень', 'Професіонал', 'Експерт', 'Гуру']);
    const [LessonType, setLessonType] = useState(['Самостійне навчання', 'Самостійне з куратором', 'Навчання в группі', 'Індивідуальне навчання']);

    return (
        <View style={styles.container} >

            <Text style={styles.itemHeader}>{activelesson.lessonName}</Text>

            <MaterialIcons name='extension' size={75} color={"#ff0000"} style={styles.icon} />

            <View style={styles.textHolder}>
           
                <Text style={styles.itemText}>Тип курсу: {activelesson.lessonCategory}</Text>
                <Text style={styles.itemText}>Автор: {activelesson.lessonAuthor}</Text>
                <Text style={styles.itemText}>Короткий опис:</Text>
                <Text style={styles.itemText}>{activelesson.lessonDetails}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        // marginTop: 16,
        borderRadius: 10,
    },

    itemHeader: {
        fontSize: 24,
        color: 'white',
        paddingLeft: 10,
        fontFamily: "BadScript",
        textAlign: "center",
    },

    itemText: {
        marginLeft: 10,
        color: "white",
    },
    icon: {
        padding: 5,
        textAlign: 'center'
    }
})