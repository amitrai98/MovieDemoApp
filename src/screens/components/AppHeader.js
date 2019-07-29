import React, { Component } from "react";
import { View, Text } from "react-native";
type Props = {};

export class AppHeader extends Component<Props> {
  render() {
    return (
      <View style={{ backgroundColor: "red", width: "100%", height: "30%" }} />
    );
  }
}

export default AppHeader;
