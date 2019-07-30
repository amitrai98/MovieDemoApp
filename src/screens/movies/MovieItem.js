import React, { Component } from "react";
import {View, Text} from "react-native";
type Props = {};

export class MovieItem extends Component<Props> {
 render() {
    const {item} = this.props;
    return (
      <View style={{margin:2, flex:1, padding:10, backgroundColor:'blue',}}>
       <Text>helo</Text>
      </View>
    );
  }

}

export default MovieItem;
