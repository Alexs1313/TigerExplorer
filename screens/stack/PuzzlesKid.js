import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';
import GradientText from '../../components/TextGradient';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const PuzzlesKid = () => {
  const [checkedPuzzle, setCheckedPuzzle] = useState(false);
  const [checkedView, setCheckedView] = useState(false);
  const [checkedPuzzle1, setCheckedPuzzle1] = useState(false);
  const [checkedView1, setCheckedView1] = useState(false);
  const [checkedPuzzle2, setCheckedPuzzle2] = useState(false);
  const [checkedView2, setCheckedView2] = useState(false);
  const [checkedPuzzle3, setCheckedPuzzle3] = useState(false);
  const [checkedView3, setCheckedView3] = useState(false);
  const [checkedPuzzle4, setCheckedPuzzle4] = useState(false);
  const [checkedView4, setCheckedView4] = useState(false);
  const [checkedPuzzle5, setCheckedPuzzle5] = useState(false);
  const [checkedView5, setCheckedView5] = useState(false);
  const [checkedPuzzle6, setCheckedPuzzle6] = useState(false);
  const [checkedView6, setCheckedView6] = useState(false);
  const [checkedPuzzle7, setCheckedPuzzle7] = useState(false);
  const [checkedView7, setCheckedView7] = useState(false);
  const [checkedPuzzle8, setCheckedPuzzle8] = useState(false);
  const [checkedView8, setCheckedView8] = useState(false);
  const [checkedPuzzle9, setCheckedPuzzle9] = useState(false);
  const [checkedView9, setCheckedView9] = useState(false);
  const [checkedPuzzle10, setCheckedPuzzle10] = useState(false);
  const [checkedView10, setCheckedView10] = useState(false);
  const [checkedPuzzle11, setCheckedPuzzle11] = useState(false);
  const [checkedView11, setCheckedView11] = useState(false);

  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isDisabled3, setIsDisabled3] = useState(false);
  const [isDisabled4, setIsDisabled4] = useState(false);
  const [isDisabled5, setIsDisabled5] = useState(false);
  const [isDisabled6, setIsDisabled6] = useState(false);
  const [isDisabled7, setIsDisabled7] = useState(false);
  const [isDisabled8, setIsDisabled8] = useState(false);
  const [isDisabled9, setIsDisabled9] = useState(false);
  const [isDisabled10, setIsDisabled10] = useState(false);
  const [isDisabled11, setIsDisabled11] = useState(false);
  const [isDisabled12, setIsDisabled12] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const puzzle =
      (checkedPuzzle && checkedView) ||
      (checkedPuzzle1 && checkedView1) ||
      (checkedPuzzle2 && checkedView2) ||
      (checkedPuzzle3 && checkedView3) ||
      (checkedPuzzle4 && checkedView4) ||
      (checkedPuzzle5 && checkedView5) ||
      (checkedPuzzle6 && checkedView6) ||
      (checkedPuzzle7 && checkedView7) ||
      (checkedPuzzle8 && checkedView8) ||
      (checkedPuzzle9 && checkedView9) ||
      (checkedPuzzle10 && checkedView10) ||
      (checkedPuzzle11 && checkedView11);
    if (puzzle) {
      setIsDisabled1(false);
      setIsDisabled2(false);
      setIsDisabled3(false);
      setIsDisabled4(false);
      setIsDisabled5(false);
      setIsDisabled6(false);
      setIsDisabled7(false);
      setIsDisabled8(false);
      setIsDisabled9(false);
      setIsDisabled10(false);
      setIsDisabled11(false);
      setIsDisabled12(false);
    }
  }, [
    checkedView,
    checkedView1,
    checkedView2,
    checkedView3,
    checkedView4,
    checkedView5,
    checkedView6,
    checkedView7,
    checkedView8,
    checkedView9,
    checkedView10,
    checkedView11,
  ]);

  const congratulations =
    checkedView &&
    checkedView2 &&
    checkedView3 &&
    checkedView4 &&
    checkedView5 &&
    checkedView6 &&
    checkedView7 &&
    checkedView8 &&
    checkedView9 &&
    checkedView10 &&
    checkedView11;

  const tryAgain = () => {
    setCheckedView(false);
    setCheckedView1(false);
    setCheckedView2(false);
    setCheckedView3(false);
    setCheckedView4(false);
    setCheckedView5(false);
    setCheckedView6(false);
    setCheckedView7(false);
    setCheckedView8(false);
    setCheckedView9(false);
    setCheckedView10(false);
    setCheckedView11(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Gradient />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 69,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <GoBackButton />
          <View
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 1,
              shadowRadius: 2,
            }}>
            <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
              Kid Tiger
            </GradientText>
          </View>
        </View>
      </View>

      <Image
        style={{marginHorizontal: 20}}
        source={require('../../assets/puzzles/kidPuzzles/puzzleBoard.png')}
      />

      {congratulations && (
        <View>
          <View style={{alignItems: 'center', marginBottom: 90, marginTop: 90}}>
            <Text style={styles.firstTextSuccsess}>Congratulations!</Text>
            <Text style={styles.secondTextSuccsess}>You win</Text>
          </View>
          <TouchableOpacity onPress={() => tryAgain()}>
            <LinearGradient
              colors={['#F2EA5C', '#E9A90C']}
              style={{
                height: 50,
                marginHorizontal: 16,
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text style={{fontWeight: '600', fontSize: 16, padding: 13}}>
                Try again
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 50,
              paddingVertical: 13,
              marginHorizontal: 16,
              alignItems: 'center',
              borderRadius: 12,
              backgroundColor: ' rgba(255, 255, 255, 1)',
              marginTop: 16,
            }}>
            <Text style={{fontWeight: '600', fontSize: 16}}>Back to menu</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={{position: 'absolute', top: 172, left: 20}}
        onPress={() => {
          if (checkedPuzzle) {
            setCheckedView(true);
          }
        }}>
        {checkedPuzzle && checkedView ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle1.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled1}
        onPress={() => {
          setCheckedPuzzle(!checkedPuzzle);

          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle && checkedView ? (
          <View style={{}}></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 90,
              height: 90,
              marginBottom: 20,
              marginHorizontal: 20,
              transform: [{rotate: '5deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle1.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 172, left: 110}}
        onPress={() => {
          if (checkedPuzzle1) {
            setCheckedView1(true);
          }
        }}>
        {checkedPuzzle1 && checkedView1 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle2.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled2}
        onPress={() => {
          setCheckedPuzzle1(!checkedPuzzle1);
          setIsDisabled1(!isDisabled1);

          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle1 && checkedView1 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 70,
              left: 50,
              transform: [{rotate: '45deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle2.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 172, left: 200}}
        onPress={() => {
          if (checkedPuzzle2) {
            setCheckedView2(true);
          }
        }}>
        {checkedPuzzle2 && checkedView2 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle3.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled3}
        onPress={() => {
          setCheckedPuzzle2(!checkedPuzzle2);
          setIsDisabled1(!isDisabled1);

          setIsDisabled2(!isDisabled2);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle2 && checkedView2 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 70,
              left: 150,
              transform: [{rotate: '125deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle3.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 170, left: 288}}
        onPress={() => {
          if (checkedPuzzle3) {
            setCheckedView3(true);
          }
        }}>
        {checkedPuzzle3 && checkedView3 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle4.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled4}
        onPress={() => {
          setCheckedPuzzle3(!checkedPuzzle3);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle3 && checkedView3 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 0,
              left: 110,
              transform: [{rotate: '70deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle4.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 260, left: 20}}
        disabled={!checkedPuzzle4}
        onPress={() => {
          if (checkedPuzzle4) {
            setCheckedView4(true);
          }
        }}>
        {checkedPuzzle4 && checkedView4 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle5.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled5}
        onPress={() => {
          setCheckedPuzzle4(!checkedPuzzle4);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle4 && checkedView4 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 0,
              left: 210,
              transform: [{rotate: '10deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle5.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 260, left: 110}}
        disabled={!checkedPuzzle5}
        onPress={() => {
          if (checkedPuzzle5) {
            setCheckedView5(true);
          }
        }}>
        {checkedPuzzle5 && checkedView5 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle6.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled6}
        onPress={() => {
          setCheckedPuzzle5(!checkedPuzzle5);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);

          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle5 && checkedView5 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 100,
              left: 210,
              transform: [{rotate: '50deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle6.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 261, left: 180}}
        disabled={!checkedPuzzle6}
        onPress={() => {
          if (checkedPuzzle6) {
            setCheckedView6(true);
          }
        }}>
        {checkedPuzzle6 && checkedView6 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle7.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled7}
        onPress={() => {
          setCheckedPuzzle6(!checkedPuzzle6);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);

          setIsDisabled6(!isDisabled6);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle6 && checkedView6 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 50,
              left: 240,
              transform: [{rotate: '30deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle7.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 261, left: 268}}
        disabled={!checkedPuzzle7}
        onPress={() => {
          if (checkedPuzzle7) {
            setCheckedView7(true);
          }
        }}>
        {checkedPuzzle7 && checkedView7 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle8.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled8}
        onPress={() => {
          setCheckedPuzzle7(!checkedPuzzle7);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);

          setIsDisabled7(!isDisabled7);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle7 && checkedView7 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 140,
              left: 20,
              transform: [{rotate: '120deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle8.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 351, left: 20}}
        disabled={!checkedPuzzle8}
        onPress={() => {
          if (checkedPuzzle8) {
            setCheckedView8(true);
          }
        }}>
        {checkedPuzzle8 && checkedView8 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle9.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled9}
        onPress={() => {
          setCheckedPuzzle8(!checkedPuzzle8);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);

          setIsDisabled8(!isDisabled8);
          setIsDisabled10(!isDisabled10);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle8 && checkedView8 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,
              marginBottom: 20,
              marginHorizontal: 20,
              top: 160,
              left: 120,
              transform: [{rotate: '10deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle9.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 331, left: 90}}
        disabled={!checkedPuzzle9}
        onPress={() => {
          if (checkedPuzzle9) {
            setCheckedView9(true);
          }
        }}>
        {checkedPuzzle9 && checkedView9 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle10.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled10}
        onPress={() => {
          setCheckedPuzzle9(!checkedPuzzle9);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);

          setIsDisabled9(!isDisabled9);
          setIsDisabled11(!isDisabled11);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle9 && checkedView9 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,
              marginBottom: 20,
              marginHorizontal: 20,
              top: 160,
              left: 180,
              transform: [{rotate: '10deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle10.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 350, left: 180}}
        disabled={!checkedPuzzle10}
        onPress={() => {
          if (checkedPuzzle10) {
            setCheckedView10(true);
          }
        }}>
        {checkedPuzzle10 && checkedView10 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle11.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled11}
        onPress={() => {
          setCheckedPuzzle10(!checkedPuzzle10);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);

          setIsDisabled10(!isDisabled10);
          setIsDisabled12(!isDisabled12);
        }}>
        {checkedPuzzle10 && checkedView10 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,
              marginBottom: 20,
              marginHorizontal: 20,
              top: 190,
              left: 80,
              transform: [{rotate: '140deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle11.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 330, left: 268}}
        disabled={!checkedPuzzle11}
        onPress={() => {
          if (checkedPuzzle11) {
            setCheckedView11(true);
          }
        }}>
        {checkedPuzzle11 && checkedView11 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/kidPuzzles/puzzle12.png')}
          />
        ) : (
          <View
            style={{
              width: 90,
              height: 90,

              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled12}
        onPress={() => {
          setCheckedPuzzle11(!checkedPuzzle11);
          setIsDisabled1(!isDisabled1);
          setIsDisabled2(!isDisabled2);
          setIsDisabled3(!isDisabled3);
          setIsDisabled4(!isDisabled4);
          setIsDisabled5(!isDisabled5);
          setIsDisabled6(!isDisabled6);
          setIsDisabled7(!isDisabled7);
          setIsDisabled8(!isDisabled8);
          setIsDisabled9(!isDisabled9);
          setIsDisabled10(!isDisabled10);

          setIsDisabled11(!isDisabled11);
        }}>
        {checkedPuzzle11 && checkedView11 ? (
          <View></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 100,
              height: 100,

              marginBottom: 20,
              marginHorizontal: 20,
              top: 190,
              left: 220,
              transform: [{rotate: '320deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/kidPuzzles/puzzle12.png')}
            />
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 16,
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,
  },
  firstTextSuccsess: {
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
    color: ' rgba(255, 255, 255, 1)',
    marginBottom: 10,
  },
  secondTextSuccsess: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    color: ' rgba(255, 255, 255, 1)',
  },
});

export default PuzzlesKid;
