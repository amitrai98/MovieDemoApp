import React, { Component } from "react";
import { View, Text } from "react-native";
type Props = {};

export class AppHeader extends Component<Props> {
  render() {
    return (
      <View style={{ backgroundColor: "#259cf7", width: "100%", height: "25%",justifyContent:'center' }} >
        <Text style={{alignSelf:'center', marginTop:40, color:"white", fontSize:20}}>{this.props.headerTitle}</Text>
      </View>
    );
  }
}

export default AppHeader;
