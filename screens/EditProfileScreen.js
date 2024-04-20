import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { editUserData } from '../api/data/api.user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDate } from '../api/dateFormat';

const EditProfile = () => {

  const route = useRoute();
  const userInfo = route.params.userData;
  const navigation = useNavigation();

  const [userData, setUserData] = useState(userInfo);
  const [uid, setUid] = useState(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const uid = route.params.userid;
        const uid = await AsyncStorage.getItem('user_id');
        setUid(uid)
      } catch (error) {
        console.log('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
    
  }, [])

  const handleChangeText = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleRegistration = () =>{
    try {
      if (editUserData(uid, {...userData})) {
        navigation.navigate('Profile', {userData:{...userData}});
      }
    } catch (error) {
      console.error('Ошибка изменения:', error);
      Alert.alert('Ошибка', 'Произошла ошибка при изменении. Пожалуйста, попробуйте еще раз');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        value={userData.first_name}
        onChangeText={text => handleChangeText('first_name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Фамилия"
        value={userData.last_name}
        onChangeText={text => handleChangeText('last_name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Отчество"
        value={userData.patro}
        onChangeText={text => handleChangeText('patro', text)}
      />
      <TextInputMask
        style={styles.input}
        placeholder="дд.мм.гггг"
        type={'datetime'}
        options={{
          format: 'DD.MM.YYYY'
        }}
        value={userData.birth}
        onChangeText={text => handleChangeText('birth', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Полис"
        value={userData.polic}
        onChangeText={text => handleChangeText('polic', text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Сохранить</Text>
      </TouchableOpacity>
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
  saveButton: {
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

export default EditProfile;
