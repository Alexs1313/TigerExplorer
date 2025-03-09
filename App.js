import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import StackNav from './screens/stackNav/StackNav';
import {FavProvider} from './context/FavContext';

const Stack = createStackNavigator;

const App = () => {
  return (
    <FavProvider>
      <NavigationContainer>
        <StackNav />

        {/* <Navigation /> */}
      </NavigationContainer>
    </FavProvider>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
