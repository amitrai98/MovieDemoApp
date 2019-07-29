import React, { Component } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AppLogger from "../../utility/AppLogger";
import * as actions from "./MovieActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AppHeader from "../components/AppHeader";
type Props = {};

export class MovieList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
      ]
    };
  }

  componentDidMount() {
    this.props.getMovies();
  }

  getrenderData = (item, index) => {
    return (
      <View
        style={{ backgroundColor: "red", margin: 10, width: 50, height: 20 }}
      >
        <Text>hello</Text>
      </View>
    );
  };
  render() {
    {
      AppLogger.log("length is " + this.state.movieList.length);
    }
    return (
      <View>
        <AppHeader />
        <Text>abra ka dabra</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieReducer: state.movieReducer
  };
};

const mapDispatchToProps = dispatch => {
  AppLogger.log("i was called");
  return {
    getMovies: bindActionCreators(actions.getMovies, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
