import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';

import DefaultGamesScreen from '../screens/nested/DefaultGamesScreen';
import DefaultTabSettingsScreen from '../screens/nested/DefaultSettings';
import DefaultTigersScreen from '../screens/nested/DefaultTigerScreen';
import DefaultMainScreen from '../screens/nested/DefaultMainScreen';
import GradientText from '../components/TextGradient';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabText,
        tabBarActiveTintColor: '#F2EA5C',
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {
            fontSize: 10,

            fontWeight: 600,
            marginTop: 8,
          },
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('../assets/tabIcons/focusedHome.png')} />
              ) : (
                <Image source={require('../assets/tabIcons/home.png')} />
              )}
            </View>
          ),
        }}
        name="Main"
        component={DefaultMainScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image
                  source={require('../assets/tabIcons/focusedTiger.png')}
                />
              ) : (
                <Image source={require('../assets/tabIcons/tiger.png')} />
              )}
            </View>
          ),
        }}
        name="Tigers"
        component={DefaultTigersScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image
                  source={require('../assets/tabIcons/focusedGames.png')}
                />
              ) : (
                <Image source={require('../assets/tabIcons/game.png')} />
              )}
            </View>
          ),
        }}
        name="Games"
        component={DefaultGamesScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image
                  source={require('../assets/tabIcons/focusedSettings.png')}
                />
              ) : (
                <Image source={require('../assets/tabIcons/settings.png')} />
              )}
            </View>
          ),
        }}
        name="Settings"
        component={DefaultTabSettingsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#D9313D',
    height: 114,
    paddingTop: 12,
    position: 'absolute',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  tabText: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 8,
  },
});
