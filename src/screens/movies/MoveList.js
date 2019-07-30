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
      movieList: [],
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
        if(this.props.MovieReducer.data.response.data != undefined){
          while( this.state.movieList.length > 0) {
            this.state.movieList.pop();
        }
          this.state.movieList.push(this.props.MovieReducer.data.response.data);
          this.forceUpdate();
      }
      }else{
        AppLogger.log("failure"+this.props.MovieReducer.error);
      }
    }
  }

  render() {
    
    return (
      <View>
        <AppHeader 
        headerTitle={"Movie List"}/>
        {this.state.movieList != undefined && this.state.movieList.length>0?
        
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
      :
      <View><Text>No Data to show</Text></View>
      }
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
  return {
    getMovies: bindActionCreators(actions.getMovies, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
