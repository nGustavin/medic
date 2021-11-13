import {
  Poppins_400Regular,
  Poppins_600SemiBold, Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Home } from './src/screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  } else{
    return (
      <Home/>
    );
  }
}