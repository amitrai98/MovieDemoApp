import React, { Component } from "react";
import {View, Text} from "react-native";
import { isEmpty } from "../../utility/Utility";
type Props = {};

export class MovieItem extends Component<Props> {
 render() {
    const {item} = this.props;
    let gener = "";
    if(item.genres.length>0)
      gener = item.genres[0].name;

    

    return (
      <View style={{margin:2, flex:1, padding:10,borderRadius:10, backgroundColor:"#259cf7",}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{flex:1, paddingTop:2}}>{"Adult Movie: "}{item.adult?"Yes":"No"}</Text>
        <Text style={{flex:1, paddingTop:2}}>{"Budjet: "+item.budget}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{flex:1, paddingTop:2}}>{"Gener: "+gener}</Text>
        <Text style={{flex:1, paddingTop:2}}>{"Popularity: "+item.popularity}</Text>
        </View>
        <Text style={{flex:1, paddingTop:2}}>{"Title: "+item.original_title}</Text>
       <Text style={{flex:1, paddingTop:5}}>{"Overview: "+item.overview}</Text>
        
      </View>
    );
  }

}

export default MovieItem;
