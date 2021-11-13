import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
  },
  name: {
    fontSize: 38,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  description: {
    fontSize: 24,
    fontFamily: fonts.regular,
    color: colors.white,
    marginTop: -10
  }
});