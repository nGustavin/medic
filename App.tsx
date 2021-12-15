import {
  Poppins_400Regular,
  Poppins_600SemiBold, Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Home } from './src/screens/Home';
import {NavigationContainer, DefaultTheme, Theme} from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Details from './src/screens/Details';
import { colors } from './src/theme';

export default function App() {

  const MyTheme: Theme = {
    dark: true,
    colors: {
      background: colors.gray,
      border: colors.gray_darker,
      card: colors.gray,
      notification: colors.pink,
      text: colors.white,
      primary: colors.pink,
    },
  };

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  const StackNav = createStackNavigator()

  const stackNavigationOptions: StackNavigationOptions = {
    headerShown: false,
    
    transitionSpec: {
      open: {
        animation: 'spring',
        config: {
          
          overshootClamping: false,
          
        }
      },
      close: {
        animation: 'spring',
        config: {
          delay: 0
        }
      }
    }
    
  }

  if(!fontsLoaded){
    return <AppLoading/>
  } else{
    return (
      <NavigationContainer theme={MyTheme}>
        <StackNav.Navigator initialRouteName='Home'>
          <StackNav.Screen name="Home" component={Home} options={stackNavigationOptions}/>
          <StackNav.Screen name="NewAlarmScreen" component={Details} options={{...stackNavigationOptions, headerShown: true}}/>
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
}