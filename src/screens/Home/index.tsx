import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import { AlarmList } from '../../components/AlarmList';
import { CircularDefaultButton } from '../../components/CircularDefaultButton';
import { Welcome } from '../../components/Welcome';
import { styles } from './styles';


type Props = StackScreenProps<any>;

export const Home: React.FC<Props> = ({navigation, route}) => {
  return (
    <>
      <StatusBar style="inverted"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Welcome />
          <CircularDefaultButton action={() => navigation.navigate("NewAlarmScreen")}/>
        </View>
        <AlarmList />
      </SafeAreaView>
    </>
  );
}