import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.1.64:3000';

export const auth = async (username, password) => {
    try {
        //const response = await axios.post(`${API_URL}/api/login`, {username: 'username', password: 'password'});
        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        const token  = data.token;
        const user_id = JSON.stringify(data.user_id);
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user_id', user_id);
        return {token, user_id};
      } catch (error) {
        throw error;
      }
}

export const isAuth = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
       if (token === null) {
        return false
       } else return true
      } catch (error) {
        throw error;
      }
}

export const setInitialRoute = () => {
    const is = isAuth()
    if (is) {
        return "Home"
    } else return "Login"
}