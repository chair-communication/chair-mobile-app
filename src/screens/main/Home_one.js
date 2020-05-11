import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ToastAndroid,
  BackHandler,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { connect } from "react-redux";
import ActionCreator from "../../actions/index";
import ActionCreator2 from "../../actions_2/index";
import { Card } from "react-native-elements";

import divCardStyle from "../../myStyles/divCardStyle";
import MyHeader from "../../components/MyHeader";
import Pos2 from "../../screens/guide/Pos2.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});

class Home_one extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // readData: ""
    };
  }
  // 이벤트 등록
  componentDidMount() {
    if (global.connected) {
      // 블루투스 모듈과 연결 성공 했을 때
    } else {
      // 블루투스 모듈과 연결 실패 했을 때
    }
    // BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  // 이벤트 해제
  componentWillUnmount() {
    // this.exitApp = false;
    // BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  // 이벤트 동작
  handleBackButton = () => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (this.exitApp == undefined || !this.exitApp) {
      ToastAndroid.show("한번 더 누르시면 종료됩니다.", ToastAndroid.SHORT);
      this.exitApp = true;

      this.timeout = setTimeout(
        () => {
          this.exitApp = false;
        },
        2000 // 2초
      );
    } else {
      clearTimeout(this.timeout);
      BackHandler.exitApp();
    }
    return true;
  };
  imageshow(a) {
    if (a == "앞으로 숙이고 있습니다.") {
      return require("../../assets/Images/f_1.png");
    } else if (a == "왼 다리를 꼬았습니다.") {
      return require("../../assets/Images/f_2.png");
    } else if (a == "오른 다리를 꼬았습니다.") {
      return require("../../assets/Images/f_3.png");
    } else if (a == "둔부를 앞으로 한 자세 입니다.") {
      return require("../../assets/Images/f_4.png");
    } else if (a == "걸터앉은 자세입니다.") {
      return require("../../assets/Images/f_5.png");
    } else if (a == "바른자세 입니다.") {
      return require("../../assets/Images/f_6.png");
    } else {
      return require("../../assets/Images/MainLogo_1.png");
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader
          navigation={this.props.navigation}
          title="실시간 자세"
        ></MyHeader>
        <ScrollView>
          <View style={styles.container}>
            <Card containerStyle={divCardStyle.c}>
              <View style={styles.container}>
                <Image source={this.imageshow(this.props.statData.pos)} />
              </View>
              <View style={styles.text}>
                <Text>{this.props.statData.pos}</Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    backData: state.bluedata.backData,
    seatData: state.bluedata.seatData,
    statData: state.statdata.statData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    backchange: (num, da) => {
      dispatch(ActionCreator.backchange(num, da));
    },
    seatchange: (num, da) => {
      dispatch(ActionCreator, seatchange(num, da));
    },
    plus_1: (num) => {
      dispatch(ActionCreator2, plus_1(num));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_one);
