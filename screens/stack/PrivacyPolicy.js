import {Alert, Button, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';

const PrivacyPolicy = () => {
  const [data, setData] = useState([
    {id: 1, name: 'oleh'},
    {id: 2, name: 'alex'},
    {id: 3, name: 'andrii'},
  ]);
  const [storedData, setStoredData] = useState([]);

  console.log(storedData);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(data));
      console.log('saveddata', data);
      Alert.alert('saved');
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      const parsed = JSON.parse(value);
      if (parsed !== null) {
        setStoredData(parsed);
      }
    } catch (error) {}
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <TextInput
        style={{width: 200, height: 40, borderWidth: 1}}
        value={data}
        onChangeText={setData}
      /> */}
      <Button title="save" onPress={saveData} />
      <Button title="get" onPress={fetchData} />
      {storedData.map(item => (
        <View>
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default PrivacyPolicy;
