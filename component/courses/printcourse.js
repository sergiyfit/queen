import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function PrintCourse({ activecourse }) {

    const [courseLevel, setCourseLevel] = useState(['Новачок', 'Початківець', 'Середній рівень', 'Професіонал', 'Експерт', 'Гуру']);
    const [courseType, setCourseType] = useState(['Самостійне навчання', 'Самостійне з куратором', 'Навчання в группі', 'Індивідуальне навчання']);

    return (
        <View style={styles.container} >

            <Text style={styles.itemHeader}>{activecourse.courseName}</Text>

            <MaterialIcons name='school' size={150} color={"#ff0000"} style={styles.icon} />

            <View style={styles.textHolder}>
                <Text style={styles.itemText}>Тип курсу: {activecourse.courseCategory}</Text>
                <Text style={styles.itemText}>Автор: {activecourse.courseAuthor}</Text>
                <Text style={styles.itemText}>Складність: {courseLevel[0]}</Text>
                <Text style={styles.itemText}>Формат курсу: {courseType[0]}</Text>
                <Text style={styles.itemText}>Тема курсу: {activecourse.courseTopic}</Text>

                <Text style={styles.itemText}>Короткий опис:</Text>
                <Text style={styles.itemText}>{activecourse.courseAbout}</Text>



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