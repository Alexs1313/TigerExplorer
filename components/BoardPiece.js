import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {teenPuzzlePieces} from '../data/puzzles';

const BoardPiece = ({piece, selectedViewIndex, selectedPuzzle}) => {
  return (
    <View
      style={{
        width: 72,
        height: 72,
        borderWidth: 1,
      }}></View>
  );
};

export default BoardPiece;
