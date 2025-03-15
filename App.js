import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

import StackNav from './screens/stackNav/StackNav';
import {FavProvider} from './context/FavContext';

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
