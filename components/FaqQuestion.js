import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const FaqQuestion = ({item}) => {
  const [toggleList, setToggleList] = useState(true);
  return (
    <View style={{marginHorizontal: 12, marginTop: 32}}>
      <View
        style={{
          paddingRight: 36,
          borderBottomColor: ' rgba(255, 255, 255, 0.2)',
          borderBottomWidth: 1,
          paddingBottom: 12,
        }}>
        <TouchableOpacity
          style={{position: 'absolute', right: 0}}
          onPress={() => setToggleList(!toggleList)}>
          <Image source={require('../assets/reservesImg/arrowUp.png')} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#fff',
            marginBottom: 16,
          }}>
          {item.title}
        </Text>

        <View style={{}}>
          {toggleList && (
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: ' rgba(255, 255, 255, 1)',
              }}>
              {item.text}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default FaqQuestion;
