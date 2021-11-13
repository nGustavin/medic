import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {StatusBar} from 'expo-status-bar'
import { AlarmList } from '../../components/AlarmList';
import { Welcome } from '../../components/Welcome';
import { styles } from './styles';

export const Home: React.FC = () => {
  return (
    <>
    <StatusBar style="inverted"/>
    <SafeAreaView style={styles.container}>
      <Welcome/>
      <AlarmList />
    </SafeAreaView>
    </>
  );
}