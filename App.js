import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Navigation} from './navigation/Navigation';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from './screens/stack/ReservesDetails';
import TabSettingsScreen from './screens/tab/TabSettingsScreen';
import Gradient from './components/RadialGradient';
import TabMainScreen from './screens/tab/TabMainScreen';

const Stack = createStackNavigator;

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
