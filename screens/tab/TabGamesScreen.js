import {createStackNavigator} from '@react-navigation/stack';

import DefaultMainScreen from '../nested/DefaultMainScreen';

import ReservesDetails from '../stack/ReservesDetails';
import DefaultGamesScreen from '../nested/DefaultGamesScreen';
import Puzzles from '../stack/Puzzles';
import Quiz from '../stack/Quiz';
import SpotTheDifference from '../stack/SpotTheDifference';

const Stack = createStackNavigator();

const TabGamesScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DefaultGamesScreen" component={DefaultGamesScreen} />
      <Stack.Screen name="Puzzles" component={Puzzles} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="SpotTheDifference" component={SpotTheDifference} />
    </Stack.Navigator>
  );
};

export default TabGamesScreen;
