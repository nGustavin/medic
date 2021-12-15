import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { colors } from '../../theme';

interface CircularButtonProps {
  action?: any
}

export const CircularDefaultButton:React.FC<CircularButtonProps> = ({action}) => {
  return (
    <TouchableOpacity
      style={styles.FloatingActionButtonStyle}
      onPress={() => action()}
    >
    <AntDesign name="plus" size={24} color={colors.white} />
  </TouchableOpacity>
  );
}