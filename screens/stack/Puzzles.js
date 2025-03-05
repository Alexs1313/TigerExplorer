import {StyleSheet, Text, View} from 'react-native';

const Puzzles = () => {
  return (
    <View style={styles.container}>
      <Text>Puzzles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Puzzles;
