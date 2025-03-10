import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import {quizPacksOfTigers} from '../../data/quizPacksOfWinter';
import GoBackButton from '../../components/GoBackButton';

const PacksOfTigersQuiz = () => {
  const navigation = useNavigation();
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(isCorrect);
  const handleOptionPress = pressedOption => {
    if (currentQuestionIdx === quizPacksOfTigers.length - 1) {
      navigation.goBack();
    } else {
      const isCorrectAnswer =
        quizPacksOfTigers[currentQuestionIdx].answer === pressedOption;

      setSelectedOption(pressedOption);
      setIsCorrect(isCorrectAnswer);

      setTimeout(() => {
        setCurrentQuestionIdx(currentQuestionIdx + 1);
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 10,
        }}>
        <GoBackButton />
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 4,
          }}>
          <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
            Packs of Tigers
          </GradientText>
        </View>
      </View>
      <Image
        source={quizPacksOfTigers[currentQuestionIdx].image}
        style={{marginHorizontal: 16, marginBottom: 24}}
      />
      <Text style={styles.question}>
        {quizPacksOfTigers[currentQuestionIdx].question}
      </Text>

      {quizPacksOfTigers[currentQuestionIdx].options.map(option => (
        <Pressable
          key={option.id}
          style={{}}
          onPress={() => handleOptionPress(option)}>
          {selectedOption === option ? (
            isCorrect ? (
              <View style={{marginHorizontal: 16}}>
                <LinearGradient
                  style={styles.linearGradient}
                  colors={['#F2EA5C', '#E9A90C']}>
                  <Text style={styles.optionText}>{option}</Text>
                </LinearGradient>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: '#E53935',
                  borderRadius: 12,
                  marginVertical: 10,
                  marginHorizontal: 16,
                  alignItems: 'center',
                }}>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            )
          ) : (
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                marginVertical: 10,
                marginHorizontal: 16,
                alignItems: 'center',
              }}>
              <Text style={styles.optionText}>{option}</Text>
            </View>
          )}
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    marginLeft: 16,

    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,
  },
  btnContainer: {
    width: 24,
    height: 24,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    right: 12,
    bottom: 0,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#E9A90C',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {},
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: ' rgba(21, 21, 21, 1)',
    padding: 20,
  },
  question: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,

    marginLeft: 16,
    paddingRight: 20,
    marginBottom: 24,
  },
  linearGradient: {
    borderRadius: 12,
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 10,
  },
});

export default PacksOfTigersQuiz;
