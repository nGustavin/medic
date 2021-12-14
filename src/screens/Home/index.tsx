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
import {useNavigation} from '@react-navigation/native'

export const Home: React.FC = () => {
  const {navigate} = useNavigation()
  return (
    <>
    <StatusBar style="inverted"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Welcome/>
          <CircularDefaultButton />
        </View>
        <AlarmList />
      </SafeAreaView>
    </>
  );
}