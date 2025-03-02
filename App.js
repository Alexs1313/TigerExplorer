import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Navigation} from './navigation/Navigation';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabMainScreen from './screens/tab/TabMainScreen';
import TabGamesScreen from './screens/tab/TabGamesScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StrictMode} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
