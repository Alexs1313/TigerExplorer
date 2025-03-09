import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';

import DefaultGamesScreen from '../screens/nested/DefaultGamesScreen';
import DefaultTabSettingsScreen from '../screens/nested/DefaultSettings';
import DefaultTigersScreen from '../screens/nested/DefaultTigerScreen';
import DefaultMainScreen from '../screens/nested/DefaultMainScreen';

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
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/tabIcons/miniHome.png')}
                style={[
                  styles.tabIconMain,
                  {tintColor: focused ? '#F2EA5C' : '#fff'},
                ]}
              />
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
            <Image
              source={require('../assets/tabIcons/miniTiger.png')}
              style={[
                styles.tabIconTigers,
                {tintColor: focused ? '#F2EA5C' : '#fff'},
              ]}
            />
          ),
        }}
        name="Tigers"
        component={DefaultTigersScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tabIcons/miniGames.png')}
              style={[
                styles.tabIconGames,
                {tintColor: focused ? '#F2EA5C' : '#fff'},
              ]}
            />
          ),
        }}
        name="Games"
        component={DefaultGamesScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tabIcons/miniSett.png')}
              style={[
                styles.tabIconSettings,
                {tintColor: focused ? '#F2EA5C' : '#fff'},
              ]}
            />
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
