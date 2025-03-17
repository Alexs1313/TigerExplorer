import {
  Image,
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

const PuzzlesTeen = () => {
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
  const [checkedPuzzle12, setCheckedPuzzle12] = useState(false);
  const [checkedView12, setCheckedView12] = useState(false);
  const [checkedPuzzle13, setCheckedPuzzle13] = useState(false);
  const [checkedView13, setCheckedView13] = useState(false);
  const [checkedPuzzle14, setCheckedPuzzle14] = useState(false);
  const [checkedView14, setCheckedView14] = useState(false);
  const [checkedPuzzle15, setCheckedPuzzle15] = useState(false);
  const [checkedView15, setCheckedView15] = useState(false);
  const [checkedPuzzle16, setCheckedPuzzle16] = useState(false);
  const [checkedView16, setCheckedView16] = useState(false);
  const [checkedPuzzle17, setCheckedPuzzle17] = useState(false);
  const [checkedView17, setCheckedView17] = useState(false);
  const [checkedPuzzle18, setCheckedPuzzle18] = useState(false);
  const [checkedView18, setCheckedView18] = useState(false);
  const [checkedPuzzle19, setCheckedPuzzle19] = useState(false);
  const [checkedView19, setCheckedView19] = useState(false);

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
  const [isDisabled13, setIsDisabled13] = useState(false);
  const [isDisabled14, setIsDisabled14] = useState(false);
  const [isDisabled15, setIsDisabled15] = useState(false);
  const [isDisabled16, setIsDisabled16] = useState(false);
  const [isDisabled17, setIsDisabled17] = useState(false);
  const [isDisabled18, setIsDisabled18] = useState(false);
  const [isDisabled19, setIsDisabled19] = useState(false);
  const [isDisabled20, setIsDisabled20] = useState(false);

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
      (checkedPuzzle11 && checkedView11) ||
      (checkedPuzzle12 && checkedView12) ||
      (checkedPuzzle13 && checkedView13) ||
      (checkedPuzzle14 && checkedView14) ||
      (checkedPuzzle15 && checkedView15) ||
      (checkedPuzzle16 && checkedView16) ||
      (checkedPuzzle17 && checkedView17) ||
      (checkedPuzzle18 && checkedView18) ||
      (checkedPuzzle19 && checkedView19);

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
      setIsDisabled13(false);
      setIsDisabled14(false);
      setIsDisabled15(false);
      setIsDisabled16(false);
      setIsDisabled17(false);
      setIsDisabled18(false);
      setIsDisabled19(false);
      setIsDisabled20(false);
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
    checkedView12,
    checkedView13,
    checkedView14,
    checkedView15,
    checkedView16,
    checkedView17,
    checkedView18,
    checkedView19,
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
    checkedView11 &&
    checkedView12 &&
    checkedView13 &&
    checkedView14 &&
    checkedView15 &&
    checkedView16 &&
    checkedView17 &&
    checkedView18 &&
    checkedView19;

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
    setCheckedView12(false);
    setCheckedView13(false);
    setCheckedView14(false);
    setCheckedView15(false);
    setCheckedView16(false);
    setCheckedView17(false);
    setCheckedView18(false);
    setCheckedView19(false);
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
              Teen Tiger
            </GradientText>
          </View>
        </View>
      </View>

      <Image
        style={{marginHorizontal: 20}}
        source={require('../../assets/puzzles/TeenPuzzle/TeenBoard/board.png')}
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
        style={{position: 'absolute', top: 170, left: 20}}
        disabled={!checkedPuzzle}
        onPress={() => {
          if (checkedPuzzle) {
            setCheckedView(true);
          }
        }}>
        {checkedPuzzle && checkedView ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece1.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle && checkedView ? (
          <View style={{}}></View>
        ) : (
          <View
            style={{
              position: 'absolute',
              marginTop: 75,
              width: 360,
              height: 300,

              marginBottom: 20,
              marginHorizontal: 20,
              transform: [{rotate: '5deg'}],
            }}>
            <Image
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece1.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 170, left: 75}}
        disabled={!checkedPuzzle1}
        onPress={() => {
          if (checkedPuzzle1) {
            setCheckedView1(true);
          }
        }}>
        {checkedPuzzle1 && checkedView1 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece2.png')}
          />
        ) : (
          <View
            style={{
              width: 85,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              left: 30,
              transform: [{rotate: '45deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece2.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 170, left: 148}}
        disabled={!checkedPuzzle2}
        onPress={() => {
          if (checkedPuzzle2) {
            setCheckedView2(true);
          }
        }}>
        {checkedPuzzle2 && checkedView2 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece3.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece3.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 170, left: 220}}
        disabled={!checkedPuzzle3}
        onPress={() => {
          if (checkedPuzzle3) {
            setCheckedView3(true);
          }
        }}>
        {checkedPuzzle3 && checkedView3 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece4.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece4.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 170, left: 290}}
        disabled={!checkedPuzzle4}
        onPress={() => {
          if (checkedPuzzle4) {
            setCheckedView4(true);
          }
        }}>
        {checkedPuzzle4 && checkedView4 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece5.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              top: -20,
              left: 210,
              transform: [{rotate: '130deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece5.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 240, left: 20}}
        disabled={!checkedPuzzle5}
        onPress={() => {
          if (checkedPuzzle5) {
            setCheckedView5(true);
          }
        }}>
        {checkedPuzzle5 && checkedView5 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece6.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece6.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 240, left: 90}}
        disabled={!checkedPuzzle6}
        onPress={() => {
          if (checkedPuzzle6) {
            setCheckedView6(true);
          }
        }}>
        {checkedPuzzle6 && checkedView6 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece7.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              top: 90,
              left: 270,
              transform: [{rotate: '30deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece7.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 225, left: 148}}
        disabled={!checkedPuzzle7}
        onPress={() => {
          if (checkedPuzzle7) {
            setCheckedView7(true);
          }
        }}>
        {checkedPuzzle7 && checkedView7 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece8.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              left: 50,
              transform: [{rotate: '90deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece8.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 226, left: 220}}
        disabled={!checkedPuzzle8}
        onPress={() => {
          if (checkedPuzzle8) {
            setCheckedView8(true);
          }
        }}>
        {checkedPuzzle8 && checkedView8 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece9.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              top: 190,
              left: 140,
              transform: [{rotate: '90deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece9.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 242, left: 305}}
        disabled={!checkedPuzzle9}
        onPress={() => {
          if (checkedPuzzle9) {
            setCheckedView9(true);
          }
        }}>
        {checkedPuzzle9 && checkedView9 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece10.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              top: 150,
              left: 195,
              transform: [{rotate: '20deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece10.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 312, left: 20}}
        disabled={!checkedPuzzle10}
        onPress={() => {
          if (checkedPuzzle10) {
            setCheckedView10(true);
          }
        }}>
        {checkedPuzzle10 && checkedView10 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece11.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              left: 60,
              transform: [{rotate: '140deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece11.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 312, left: 74}}
        disabled={!checkedPuzzle11}
        onPress={() => {
          if (checkedPuzzle11) {
            setCheckedView11(true);
          }
        }}>
        {checkedPuzzle11 && checkedView11 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece12.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
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
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
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
              left: 260,
              transform: [{rotate: '320deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece12.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 296, left: 163}}
        disabled={!checkedPuzzle12}
        onPress={() => {
          if (checkedPuzzle12) {
            setCheckedView12(true);
          }
        }}>
        {checkedPuzzle12 && checkedView12 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece13.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled13}
        onPress={() => {
          setCheckedPuzzle12(!checkedPuzzle12);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle12 && checkedView12 ? (
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
              left: 280,
              transform: [{rotate: '10deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece13.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 297, left: 235}}
        disabled={!checkedPuzzle13}
        onPress={() => {
          if (checkedPuzzle13) {
            setCheckedView13(true);
          }
        }}>
        {checkedPuzzle13 && checkedView13 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece14.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled14}
        onPress={() => {
          setCheckedPuzzle13(!checkedPuzzle13);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled13(!isDisabled13);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle13 && checkedView13 ? (
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
              top: 200,
              left: 20,
              transform: [{rotate: '50deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece14.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 297, left: 290}}
        disabled={!checkedPuzzle14}
        onPress={() => {
          if (checkedPuzzle14) {
            setCheckedView14(true);
          }
        }}>
        {checkedPuzzle14 && checkedView14 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece15.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled15}
        onPress={() => {
          setCheckedPuzzle14(!checkedPuzzle14);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle14 && checkedView14 ? (
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
              top: 90,
              left: 110,
              transform: [{rotate: '30deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece15.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 369, left: 20}}
        disabled={!checkedPuzzle15}
        onPress={() => {
          if (checkedPuzzle15) {
            setCheckedView15(true);
          }
        }}>
        {checkedPuzzle15 && checkedView15 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece16.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled16}
        onPress={() => {
          setCheckedPuzzle15(!checkedPuzzle15);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle15 && checkedView15 ? (
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
              top: 90,
              left: 0,
              transform: [{rotate: '10deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece16.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 369, left: 76}}
        disabled={!checkedPuzzle16}
        onPress={() => {
          if (checkedPuzzle16) {
            setCheckedView16(true);
          }
        }}>
        {checkedPuzzle16 && checkedView16 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece17.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled17}
        onPress={() => {
          setCheckedPuzzle16(!checkedPuzzle16);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle16 && checkedView16 ? (
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
              left: 170,
              transform: [{rotate: '70deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece17.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 369, left: 148}}
        disabled={!checkedPuzzle17}
        onPress={() => {
          if (checkedPuzzle17) {
            setCheckedView17(true);
          }
        }}>
        {checkedPuzzle17 && checkedView17 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece18.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled18}
        onPress={() => {
          setCheckedPuzzle17(!checkedPuzzle17);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled19(!isDisabled19);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle17 && checkedView17 ? (
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
              left: 120,
              transform: [{rotate: '10deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece18.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 384, left: 235}}
        disabled={!checkedPuzzle18}
        onPress={() => {
          if (checkedPuzzle18) {
            setCheckedView18(true);
          }
        }}>
        {checkedPuzzle18 && checkedView18 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece19.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled19}
        onPress={() => {
          setCheckedPuzzle18(!checkedPuzzle18);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled20(!isDisabled20);
        }}>
        {checkedPuzzle18 && checkedView18 ? (
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
              left: 70,
              transform: [{rotate: '40deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece19.png')}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: 369, left: 290}}
        disabled={!checkedPuzzle19}
        onPress={() => {
          if (checkedPuzzle19) {
            setCheckedView19(true);
          }
        }}>
        {checkedPuzzle19 && checkedView19 ? (
          <Image
            style={{position: 'absolute', top: 1}}
            source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece20.png')}
          />
        ) : (
          <View
            style={{
              width: 75,
              height: 75,
              marginBottom: 20,
            }}></View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isDisabled20}
        onPress={() => {
          setCheckedPuzzle19(!checkedPuzzle19);
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
          setIsDisabled12(!isDisabled12);
          setIsDisabled13(!isDisabled13);
          setIsDisabled14(!isDisabled14);
          setIsDisabled15(!isDisabled15);
          setIsDisabled16(!isDisabled16);
          setIsDisabled17(!isDisabled17);
          setIsDisabled18(!isDisabled18);
          setIsDisabled19(!isDisabled19);
        }}>
        {checkedPuzzle19 && checkedView19 ? (
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
              left: 20,
              transform: [{rotate: '320deg'}],
            }}>
            <Image
              style={{}}
              source={require('../../assets/puzzles/TeenPuzzle/TeenPuzzlePieces/puzzle_piece20.png')}
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

export default PuzzlesTeen;
