import {createStackNavigator} from '@react-navigation/stack';

import DefaultMainScreen from '../nested/DefaultMainScreen';
import ReservesDetails from '../stack/ReservesDetails';
import DefaultGamesScreen from '../nested/DefaultGamesScreen';
import Puzzles from '../stack/Puzzles';
import Quiz from '../stack/Quiz';
import SpotTheDifference from '../stack/SpotTheDifference';
import {Navigation} from '../../navigation/Navigation';
import DefaultTabSettingsScreen from '../nested/DefaultSettings';
import FaqScreen from '../stack/FaqScreen';
import Favourites from '../stack/Favourites';
import DefaultTigersScreen from '../nested/DefaultTigerScreen';
import TigerDetails from '../stack/TigerDetails';
import NewsDetails from '../stack/NewsDetails';
import FavNewsDetails from '../stack/FavNewsDetails';
import HuntingQuiz from '../stack/HuntingQuiz';
import TigerInWinterQuiz from '../stack/TigerInWinterQuiz';
import PacksOfTigersQuiz from '../stack/PacksOfTigersQuiz';
import SpotLevelOne from '../stack/SpotLevelOne';
import SpotLevelTwo from '../stack/SpotLevelTwo';
import SpotLevelThree from '../stack/SpotLevelThree';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NavigationTab" component={Navigation} />
      <Stack.Screen name="DefaultGamesScreen" component={DefaultGamesScreen} />
      <Stack.Screen name="Puzzles" component={Puzzles} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="SpotTheDifference" component={SpotTheDifference} />
      <Stack.Screen
        name="DefaultTabSettingsScreen"
        component={DefaultTabSettingsScreen}
      />
      <Stack.Screen name="FaqScreen" component={FaqScreen} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="Tigers" component={DefaultTigersScreen} />
      <Stack.Screen name="TigerDetails" component={TigerDetails} />
      <Stack.Screen name="DefaultMainScreen" component={DefaultMainScreen} />
      <Stack.Screen name="ReservesDetails" component={ReservesDetails} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="FavNewsDetails" component={FavNewsDetails} />
      <Stack.Screen name="HuntingQuiz" component={HuntingQuiz} />
      <Stack.Screen name="TigerInWinterQuiz" component={TigerInWinterQuiz} />
      <Stack.Screen name="PacksOfTigersQuiz" component={PacksOfTigersQuiz} />
      <Stack.Screen name="SpotLevelOne" component={SpotLevelOne} />
      <Stack.Screen name="SpotLevelTwo" component={SpotLevelTwo} />
      <Stack.Screen name="SpotLevelThree" component={SpotLevelThree} />
    </Stack.Navigator>
  );
};

export default StackNav;
