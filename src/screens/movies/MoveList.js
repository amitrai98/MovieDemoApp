import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import AppLogger from "../../utility/AppLogger";
import * as actions from "./MovieActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AppHeader from "../components/AppHeader";
import MovieItem from "./MovieItem";
type Props = {};

export class MovieList extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [1,2,3,4,5]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getMovies();

    }, 1000);
  }

  componentDidUpdate(prevProps){
    let newProp = this.props;
    if(prevProps.movieReducer.isFetching != newProp.movieReducer.isFetching && !newProp.movieReducer.isFetching){
      if(newProp.movieReducer.success){
        AppLogger.log("success"+newProp.movieReducer.data);
      }else{
        AppLogger.log("failure"+newProp.movieReducer.error);

      }
    }
  }

  render() {
    {
      AppLogger.log("length is " + this.state.movieList.length);
    }
    return (
      <View>
        <AppHeader />
        <FlatList
        data={this.state.movieList}
        renderItem={({ item, index }) => (
          <MovieItem
          item={item}
          index={index}/>
        )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieReducer: state.MovieReducer
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
