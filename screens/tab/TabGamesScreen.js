import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const TabGamesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TabGamesScreen</Text>
      <View style={styles.container}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.text}>Sign in with Facebook</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabGamesScreen;
