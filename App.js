import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "./styles/global";

import TitlePage from "./component/titlepage";
import Header from "./component/header";
import MainPage from "./component/mainpage";

export default function App() {

  const [activePage, setPage] = useState(0);

  const [headerCaption, setHeader] = useState("Main page");

  const [user, setUser] = useState({
    login: "guest",
    email: "test",
    password: "test",
    session_id: "000",
    userFirstName: "Guest",
    userLastName: "Guest",
    userImg: "none",
    userInformation: "Guest",
  });

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const switchPage = (value) => {
    setPage(value);
  }

  const hideMenu = () => {
    setShowMenu(false);
  }

  const choseMenu = (value) => {
    setShowMenu(false);
    switchPage(value);
  }



  switch (activePage) {
    case 0:
      {
        return (
          <View style={globalStyles.container}>
            <TitlePage switchPage={switchPage} />
          </View>
        );
      }
      break;

    default:
      {
        return (
          <TouchableWithoutFeedback onPress={() => hideMenu()}>
            <View style={globalStyles.container}>
              <Header
                headerCaption={headerCaption}
                setHeader={setHeader}
                activePage={activePage}
                switchPage={switchPage}
                toggleMenu={toggleMenu}
              />
              {showMenu && (
                <View style={globalStyles.menu}>
                  {/* Тут додайте пункти меню */}
                  <TouchableWithoutFeedback onPress={() => choseMenu(1)}>
                    <Text style={globalStyles.menuItem} >Обрати доступні курси</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback >
                    <Text style={globalStyles.menuItem} >Особистий кабінет</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback >
                    <Text style={globalStyles.menuItem} >Каталог доступних курсів</Text>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback >
                    <Text style={globalStyles.menuItem} >Статистика і рейтинг</Text>
                  </TouchableWithoutFeedback>
                  {/* <TouchableWithoutFeedback onPress={() => choseMenu(5)}>
                  <Text style={globalStyles.menuItem} >Каталог курсів</Text>
                </TouchableWithoutFeedback> */}
                  {/* <TouchableWithoutFeedback onPress={() => choseMenu(5)}>
                  <Text style={globalStyles.menuItem} >Перейти в незавершений урок</Text>
                </TouchableWithoutFeedback> */}
                </View>
              )}

              <View style={globalStyles.workspace}>
                <MainPage
                  headerCaption={headerCaption}
                  setHeader={setHeader}
                  activePage={activePage}
                  switchPage={switchPage}
                />
              </View>
              {/* <Text color='white'> Active page: {activePage}</Text> */}
            </View>
          </TouchableWithoutFeedback>
        );
      }
      break;

    // default: {
    //   return (
    //     <View style={globalStyles.container}>
    //       <Header />
    //       <View style={globalStyles.bluespace}>
    //       </View> 
    //     </View>
    //   );
    // }
  }
}


