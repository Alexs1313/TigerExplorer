import {createStackNavigator} from '@react-navigation/stack';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import TigerDetails from '../stack/TigerDetails';
import DefaultTigersScreen from '../nested/DefaultTigerScreen';

const Stack = createStackNavigator();

const TabTigersScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tigers" component={DefaultTigersScreen} />
      <Stack.Screen name="TigerDetails" component={TigerDetails} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default TabTigersScreen;
