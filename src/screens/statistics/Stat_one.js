import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  PickerPropertiesAndroid
} from "react-native";
import { BarChart, XAxis, Grid, YAxis } from "react-native-svg-charts";
import { LinearGradient, Stop, Defs } from "react-native-svg";
import * as scale from "d3-scale";

import MyHeader from "../../components/MyHeader";

class Stat_one extends Component {
  state = {
    year: "",
    month: "",
    date: ""
  };

  render() {
    const data = [
      { pos: "1번자세", val: 20 },
      { pos: "2번자세", val: 50 },
      { pos: "3번자세", val: 30 },
      { pos: "4번자세", val: 70 },
      { pos: "5번자세", val: 10 },
      { pos: "6번자세", val: 0 },
      { pos: "7번자세", val: 60 },
      { pos: "8번자세", val: 50 }
    ];
    const da2 = ["시간", "", "", "", "", "", "", ""];
    const { year, month, date } = this.state;

    const Gradient = () => (
      <Defs key={"gradient"}>
        <LinearGradient
          id={"gradient"}
          x1={"0%"}
          y={"0%"}
          x2={"0%"}
          y2={"100%"}
        >
          <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
          <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
        </LinearGradient>
      </Defs>
    );

    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="통 계"></MyHeader>

        <ScrollView>
          <View style={styles.container}>
            <View style={styles.pickContainer}>
              <Picker
                selectedValue={year}
                style={{ height: 50, width: 103, color: "#CEAEA7" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ year: itemValue })
                }
                mode="dropdown"
              >
                <Picker.Item label="2017" value="2017" />
                <Picker.Item label="2018" value="2018" />
                <Picker.Item label="2019" value="2019" />
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
              </Picker>
              <Text style={{ fontWeight: "bold" }}>년 </Text>

              <Picker
                selectedValue={month}
                style={{
                  height: 50,
                  width: 75,
                  color: "#CEAEA7"
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ month: itemValue })
                }
                mode="dropdown"
              >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
              </Picker>
              <Text style={{ fontWeight: "bold" }}>월 </Text>

              <Picker
                selectedValue={date}
                style={{ height: 50, width: 75, color: "#CEAEA7" }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ date: itemValue })
                }
                mode="dropdown"
              >
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                <Picker.Item label="13" value="13" />
                <Picker.Item label="14" value="14" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="16" value="16" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="21" value="21" />
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
                <Picker.Item label="25" value="25" />
                <Picker.Item label="26" value="26" />
                <Picker.Item label="27" value="27" />
                <Picker.Item label="28" value="28" />
                <Picker.Item label="29" value="29" />
                <Picker.Item label="30" value="30" />
                <Picker.Item label="31" value="31" />
              </Picker>

              <Text style={{ fontWeight: "bold" }}>일</Text>
            </View>
          </View>
          <View style={{ flex: 2 }}></View>
          <View style={{ flex: 4, flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <YAxis
                data={data}
                yAccessor={({ index }) => index}
                scale={scale.scaleBand}
                formatLabel={(_, index) => da2[index]}
              />
            </View>
            <View style={{ flex: 9, paddingRight: 20 }}>
              <BarChart
                style={{ height: 400 }}
                data={data}
                contentInset={{ top: 10, bottom: 10 }}
                spacing={0.2}
                yAccessor={({ item }) => item.val}
                svg={{ fill: "url(#gradient)" }}
              >
                <Gradient></Gradient>
              </BarChart>
              <XAxis
                data={data}
                scale={scale.scaleBand}
                formatLabel={(_, index) => data[index].pos}
                labelStyle={{ color: "black" }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pickContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Stat_one;
