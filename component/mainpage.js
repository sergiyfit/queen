import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import CourseItem from './courses/courseitem'
import PrintCourse from './courses/printcourse'

import LessonItem from './lessons/lessonitem'
import PrintLesson from './lessons/printlesson'
import StudyLesson from './lessons/studylesson'

import { defaultCourses } from "./defaultValues/defaultCourses";
import { defaultLessons } from "./defaultValues/defaultLessons";

export default function MainPage({ activePage, switchPage, headerCaption, setHeader }) {

  const [courses, setCourses] = useState(defaultCourses);
  const [lessons, setLesson] = useState(defaultLessons);

  const [activecourse, setActiveCourse] = useState(0);
  const [activelesson, setActiveLesson] = useState(0);



  const pressHandler = (course) => {
    setActiveCourse(course);

    // const filteredLessons = defaultLessons ;
    // filteredLessons.filter((lesson) => lesson.idCourse == course.id)
    // filteredLessons.forEach( lesson => {
    //   console.log('====================================');
    //   console.log(lesson.lessonName);
    //   console.log('====================================');
    // })

    setLesson(defaultLessons(course.id));

    switchPage(2);

    
  }

  const confirmCourse = (item) => {
    switchPage(3);
  }
  const finishLesson = () => {
    if (lesson.lessonType == "free"){
      alert('Урок зараховано по факту перегляду матеріалів');  
    }
    switchPage(3);      
  }

  const pressLesson = (lesson) => {
    setActiveLesson(lesson);
    switchPage(4);

  }

  const getCourseByID = (id) => {
    courses.forEach((iterable) => { if (iterable.id == id) return iterable })
  }
  const confirmLesson = (item) => {

    switchPage(5);
  }

  switch (activePage) {
    case 1:
      setHeader("Головна сторінка");

      return (
        <View style={styles.workpage}>

          <FlatList
            data={courses}
            renderItem={({ item }) => (
              <CourseItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      );
      break;

    case 2: {
      setHeader(activecourse.courseName);

      return (
        <View style={styles.workpage}>
          <ScrollView>

            <PrintCourse
              activecourse={activecourse}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => confirmCourse()}
              title="Start"
              color="#ff0000"
            />
          </View>
        </View>
      );
    }
      break;
    case 3: {
      setHeader("Обрати урок");

      return (
        <View style={styles.workpage}>
          <FlatList
            data={lessons}
            renderItem={({ item }) => (
              <LessonItem item={item} pressLesson={pressLesson} />
            )}
          />
        </View>
      );
    }
    break;
    case 4: {
      setHeader("Розпочати урок");

      return (
        <View style={styles.workpage}>
          <ScrollView>
            <PrintLesson
              activelesson={activelesson}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => confirmLesson()}
              title="Start"
              color="#ff0000"
            />
          </View>
        </View>
      );
    }
    break;

    case 5: {
      
      setHeader("Матеріали Уроку");
      return (
        <View style={styles.workpage}>
          <ScrollView>
            <StudyLesson
              activelesson={activelesson}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => finishLesson()}
              title="Завершити урок"
              color="#ff0000"
            />
          </View>

        </View>
      );
    }
    break;


    default: {
      return (
        <View style={styles.pinkspace}>

          <Text style={styles.textItem}>{'Page: ' + activePage + 'Course: ' + activecourse.id + ' lesson:' + activelesson.id}</Text>
        </View>
      );
    };


  }

}

const styles = StyleSheet.create({
  textItem: {
    fontFamily: "Calligraffitti",
    color: "white",
    backgroundColor: "green",
    textAlign: "center",
    fontSize: 15
  },
  buttonContainer: {
    margin: 30,
    marginTop: 10
  },
  workpage: {
    flex: 1,
    height: 100
  },
  pinkspace: {
    flex: 1,
    width: "100%",
    backgroundColor: "pink"
  }
});
