import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient style={{borderRadius: 100}} colors={['#F2EA5C', '#E9A90C']}>
      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          borderRadius: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack('')}>
        {<Image source={require('../assets/reservesImg/arrow.png')} />}
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GoBackButton;
