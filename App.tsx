import {
  Poppins_400Regular,
  Poppins_600SemiBold, Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Home } from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Details from './src/screens/Details';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  const StackNav = createNativeStackNavigator()

  const stackNavigationOptions: NativeStackNavigationOptions = {
    headerShown: false
  }

  if(!fontsLoaded){
    return <AppLoading/>
  } else{
    return (
      <NavigationContainer>
        <StackNav.Navigator initialRouteName='Home'>
          <StackNav.Screen name="Home" component={Home} options={stackNavigationOptions}/>
          <StackNav.Screen name="Alarm" component={Details} options={stackNavigationOptions}/>
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
}