import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';

const DefaultTabSettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>DefaultTabSettingsScreen</Text>
      <Button title="click" onPress={() => navigation.navigate('NewsScreen')} />
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

export default DefaultTabSettingsScreen;
