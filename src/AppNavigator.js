import {
    createStackNavigator,
    createAppContainer,
    
  } from "react-navigation";
  import MovieList from "./screens/movies/MoveList"
  
  const AppStack = createStackNavigator(
    {
      MovieList: { screen: MovieList },
      
    },
    {
      initialRouteName: "MovieList",
      defaultNavigationOptions: {
        header: null
      }
    }
  );
  
  const AppNavigator = createAppContainer(AppStack);
  
  export default AppNavigator;
  