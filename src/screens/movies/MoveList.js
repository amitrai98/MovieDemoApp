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
      movieList: [1,2,3,4,5],
      refreshing:false
    };
  }

  componentDidMount() {
    this.props.getMovies();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.MovieReducer.isFetching != this.props.MovieReducer.isFetching && 
      !this.props.MovieReducer.isFetching){
      if(this.props.MovieReducer.success){
        AppLogger.log("success"+this.props.MovieReducer.data);
      }else{
        AppLogger.log("failure"+this.props.MovieReducer.error);

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
        refreshing={this.state.refreshing}
        onRefresh={() => {          
          this.props.getMovies();
        }}
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
    MovieReducer: state.MovieReducer
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
