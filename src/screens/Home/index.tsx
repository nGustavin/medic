import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import {StatusBar} from 'expo-status-bar'
import { AlarmList } from '../../components/AlarmList';
import { Welcome } from '../../components/Welcome';
import { styles } from './styles';
import { CircularDefaultButton } from '../../components/CircularDefaultButton';

export const Home: React.FC = () => {
  return (
    <>
      <StatusBar style="inverted"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Welcome />
          {/* <CircularDefaultButton action={}/> */}
        </View>
        <AlarmList />
      </SafeAreaView>
    </>
  );
}