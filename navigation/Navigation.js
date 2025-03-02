import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, View} from 'react-native';

import TabMainScreen from '../screens/tab/TabMainScreen';
import TabTigersScreen from '../screens/tab/TabTigersScreen';
import TabGamesScreen from '../screens/tab/TabGamesScreen';
import TabSettingsScreen from '../screens/tab/TabSettingsScreen';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
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
            <View style={styles.iconContainer}>
              <Image
                source={require('../assets/tabIcons/home.png')}
                style={[
                  styles.tabIcon,
                  {tintColor: focused ? '#F2EA5C' : '#fff'},
                ]}
              />
            </View>
          ),
        }}
        name="Main"
        component={TabMainScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tabIcons/tiger.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#F2EA5C' : '#fff'},
              ]}
            />
          ),
        }}
        name="Tigers"
        component={TabTigersScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tabIcons/game.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#F2EA5C' : '#fff'},
              ]}
            />
          ),
        }}
        name="Games"
        component={TabGamesScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/tabIcons/settings.png')}
              style={[
                styles.tabIcon,
                {tintColor: focused ? '#F2EA5C' : '#fff'},
              ]}
            />
          ),
        }}
        name="Settings"
        component={TabSettingsScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  tabBar: {
    backgroundColor: '#D9313D',
    height: 114,
    paddingTop: 12,
    position: 'absolute',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  tabIcon: {
    width: 25,
    height: 24,
    color: '#fff',
  },
  tabText: {
    fontSize: 10,
    fontWeight: '600',
    marginTop: 8,
  },
});
