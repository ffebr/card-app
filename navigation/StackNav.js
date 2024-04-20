// navigation/StackNav.js

import React from 'react';


import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardApplicationScreen from '../screens/CardApplicationScreen';
import ProfileInfo from '../screens/ProfileInfoScreen';
import EditProfile from '../screens/EditProfileScreen';
import ActionsScreen from '../screens/ActionsScreen';
import AboutActions from '../screens/AboutActionScreen';

const Stack = createNativeStackNavigator();

const StackNav = ({ initialRoute }) => {

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Главная страница' }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: 'Авторизация' }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTitle: 'Регистрация' }} />
      <Stack.Screen name="Offer" component={CardApplicationScreen} options={{ headerTitle: 'Оформление' }} />
      <Stack.Screen name="Profile" component={ProfileInfo} options={{ headerTitle: 'Профиль' }} />
      <Stack.Screen name="Edit" component={EditProfile} options={{ headerTitle: 'Редактирование' }} />
      <Stack.Screen name="Actions" component={ActionsScreen} options={{ headerTitle: 'Предложения' }} />
      <Stack.Screen name="About" component={AboutActions} options={{ headerTitle: 'Подробнее' }} />
    </Stack.Navigator>
  );
};

export default StackNav;
