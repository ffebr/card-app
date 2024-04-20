import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SupportWidget from './components/SupportWidget';
import { auth } from '../api/auth/api.auth';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const {token, user_id} = await auth(email, password);
      navigation.navigate('Home', {userid: user_id});
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    }
  };

  const navigateToRegist = () =>{
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={navigateToRegist}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <SupportWidget/>
    </View>
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
  loginButton: {
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

export default LoginScreen;
