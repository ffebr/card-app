import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import SupportWidget from './components/SupportWidget';
import { registration } from '../api/registration/api.registration';
import { useNavigation } from '@react-navigation/native';



const RegistrationScreen = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    first_name: '',
    patro: '',
    last_name: '',
  });
  const navigation = useNavigation();

  const handleChangeText = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleRegistration = () =>{
    try {
      if (!userData.last_name || !userData.first_name || !userData.username || !userData.password) {
        Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
        return;
      }
      if (registration(userData)) {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      Alert.alert('Ошибка', 'Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <TextInput
        style={styles.input}
        placeholder="Фамилия"
        value={userData.last_name}
        onChangeText={text => handleChangeText('last_name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={userData.first_name}
        onChangeText={text => handleChangeText('first_name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Отчество"
        value={userData.patro}
        onChangeText={text => handleChangeText('patro', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={userData.username}
        onChangeText={text => handleChangeText('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry={true}
        value={userData.password}
        onChangeText={text => handleChangeText('password', text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <SupportWidget/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: '#90FF88',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#464646',
    fontSize: 16,
  },
});

export default RegistrationScreen;
