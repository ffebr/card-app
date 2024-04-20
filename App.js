import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './navigation/StackNav';
import { setInitialRoute} from './api/auth/api.auth';
import { useEffect, useState } from 'react';


export default function App() {
  const [initialRouteName, setInitialRouteName] = useState('Login');
  useEffect(() => {
    setInitialRouteName(setInitialRoute())
  }, [])
  

  console.log(initialRouteName)
  return (
   <NavigationContainer>
      <StackNav initialRoute={initialRouteName}></StackNav>
   </NavigationContainer>
  );
}

