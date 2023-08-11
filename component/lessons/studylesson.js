import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';



export default function StudyLesson({ activelesson }) {

    const [LessonLevel, setLessonLevel] = useState(['Новачок', 'Початківець', 'Середній рівень', 'Професіонал', 'Експерт', 'Гуру']);
    const [LessonType, setLessonType] = useState(['Самостійне навчання', 'Самостійне з куратором', 'Навчання в группі', 'Індивідуальне навчання']);

    return (
        <View style={styles.container} >

            <Text style={styles.itemHeader}>{activelesson.lessonName}</Text>

            <View style={{flex: 1, width:"100%", height: 200}}>
                <WebView
                    style={ {  marginTop: (Platform.OS == 'ios') ? 20 : 0,} }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/Vj33XMZgZ14' }}
                />
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