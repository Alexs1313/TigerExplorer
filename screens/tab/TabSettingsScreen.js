import {createStackNavigator} from '@react-navigation/stack';

import DefaultTabSettingsScreen from '../nested/DefaultSettings';
import NewsScreen from '../stack/ReservesDetails';
import {Navigation} from '../../navigation/Navigation';

const Stack = createStackNavigator();

const TabSettingsScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="DefaultTabSettingsScreen"
        component={DefaultTabSettingsScreen}
      />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
    </Stack.Navigator>
  );
};

export default TabSettingsScreen;
