import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Splash from '../screens/Welcome/Splash';
import VideoPlayer from '../screens/Video/VideoPlayer';
import Login from '../screens/Welcome/Login';
import SignUp from '../screens/Welcome/Signup';
import MovieSearchScreen from '../screens/Search/SearchMovies';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={MovieSearchScreen} />
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
}
export default AppNavigator;