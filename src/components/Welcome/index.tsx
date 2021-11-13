import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

export const Welcome:React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Medic</Text>
      <Text style={styles.description}>Seu assistente de {'\n'}medicação</Text>
    </View>
  );
}