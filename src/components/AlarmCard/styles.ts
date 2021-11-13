import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    backgroundColor: colors.pink,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  innerContainer:{
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: 16
  },
  main: {
    fontFamily: fonts.bold,
    fontSize: 38,
    color: colors.white,
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  footerText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.white
  }
});