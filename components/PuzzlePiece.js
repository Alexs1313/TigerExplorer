import {Image, TouchableOpacity, View} from 'react-native';
import {puzzles} from '../../data/puzzles';
import {useState} from 'react';

const PuzzlePiece = ({puzzle, selectedView, selectedPuzzle}) => {
  //   const shuffleTop = Math.floor(Math.random() * 190);
  //   const shuffleLeft = Math.floor(Math.random() * 280);
  //   const shuffleRotate = Math.floor(Math.random() * 360);

  return (
    <View>
      <View
        style={
          {
            //   top: `${shuffleTop}`,
            //   left: `${shuffleLeft}`,
            //   transform: [{rotate: `${shuffleRotate}deg`}],
          }
        }>
        <Image source={puzzle.image} style={{}} />
      </View>
    </View>
  );
};

export default PuzzlePiece;
