import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { colors } from '../../theme';

export const CircularDefaultButton:React.FC = () => {
  return (
    <TouchableOpacity
      style={styles.FloatingActionButtonStyle}
    >
    <AntDesign name="plus" size={24} color={colors.white} />
  </TouchableOpacity>
  );
}