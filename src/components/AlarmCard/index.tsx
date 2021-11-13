import Switch from '@nghinv/react-native-switch';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Text, TouchableOpacity,
  View
} from 'react-native';
import { colors } from '../../theme';
import { styles } from './styles';


export const AlarmCard:React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.7}  
    >
      <LinearGradient
        colors={[colors.pink_gradient.start, colors.pink_gradient.end]}
        style={styles.innerContainer}
        start={{
          x: 1,
          y: 1
        }}
        end={{
          x: 0,
          y: 0
        }}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Probiótico</Text>
          <Switch
            trackColor={{ false: colors.gray_darker, true: colors.pink }}
            thumbColor="#f4f3f4"
            onChange={toggleSwitch}
            value={isEnabled}
            size={22}
          />
        </View>
        {/* <View style={styles.main}> */}
          <Text style={styles.main}>20:00</Text>
        {/* </View> */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>8h</Text>
          <Text  style={styles.footerText}>Última dose - 8:00</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}