import React from 'react';
import {
  ScrollView
} from 'react-native';
import { AlarmCard } from '../AlarmCard';
import { styles } from './styles';



export const AlarmList:React.FC = () => {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
      showsVerticalScrollIndicator={false}
    >
      
      <AlarmCard/>
      <AlarmCard/>
      <AlarmCard/>
      <AlarmCard/>
      <AlarmCard/>
      <AlarmCard/>
      <AlarmCard/>
      <AlarmCard/>
      <AlarmCard/>
    </ScrollView>
    
  );
}