import React, { Component } from "react";
import { View, Text, ScrollView, Image, AsyncStorage } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Avatar, Button, Icon } from "react-native-elements";

import SettingNav from "../navigations/SettingNav";
import HomeNav from "../navigations/HomeNav";
import Privacy from "../screens/auth/Privacy";
import AppConfig from "../screens/main/AppConfig";

import URL from "../NET";

// 드로우 네비게이션 상단 컴포넌트(로그인 상태)
class DrawerContent extends React.Component {
  state = {
    username: "안녕"
  };

  requestInfo = async () => {
    const token = await AsyncStorage.getItem("token");
    await fetch(URL.account, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: token
      })
    }).then(resData => {
      const res = JSON.parse(resData._bodyInit);
      console.log(res);

      if (res.success) {
        this.setState({ username: res.user.name });
      } else {
        this.setState({ username: "비회원" });
      }
    });
  };

  UNSAFE_componentWillMount() {
    this.requestInfo();
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 140,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Avatar
            size="large"
            overlayContainerStyle={{ backgroundColor: "white" }}
            rounded
            onPress={() => this.props.navigation.navigate("Privacy")}
            containerStyle={{ padding: 20 }}
            source={require("../assets/Images/ex.png")}
          />
          <Text style={{ paddingRight: 130, fontSize: 23, color: "black" }}>
            {this.state.username}
          </Text>
        </View>
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}

export default MainNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav,
      navigationOptions: {
        drawerLabel: "홈",
        drawerIcon: () => <Icon name="home" size={25} />
      }
    },

    Privacy: {
      screen: Privacy,
      navigationOptions: {
        drawerLabel: "내 정보",
        drawerIcon: () => <Icon name="user" size={25} type="font-awesome" />
      }
    },

    Setting: {
      screen: SettingNav,
      navigationOptions: {
        drawerLabel: "설정",
        drawerIcon: () => <Icon name="cog" size={25} type="font-awesome" />
      }
    },

    Appinfo: {
      screen: AppConfig,
      navigationOptions: {
        drawerLabel: "앱 정보",
        drawerIcon: () => (
          <Icon name="info-circle" size={25} type="font-awesome" />
        )
      }
    }
  },
  {
    hideStatusBar: true,
    intialRouteName: "Home",
    drawerBackgroundColor: "#ffffff", // 앱의 백그라운드 컬러와 맞추면 됨
    overlayColor: "#D8D8D8",
    contentComponent: DrawerContent,
    contentOptions: {
      labelStyle: { fontSize: 15 }
    }
  }
);
