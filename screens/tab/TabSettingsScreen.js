import {StyleSheet, Text, View} from 'react-native';

const TabSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TabSettingsScreen</Text>
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

export default TabSettingsScreen;
