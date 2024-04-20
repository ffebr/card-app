import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNavBar from './components/BottomNavBar';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from '../api/dateFormat';

const ProfileInfo = () => {
  const route = useRoute();
  const userInfo = route.params.userData;
  console.log(userInfo)
  const navigation = useNavigation();

  const navigateToEdit = () => {
    navigation.navigate('Edit', {userData: userInfo})
  }


  return (
    <TouchableOpacity style={styles.container} onPress={navigateToEdit}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Имя:</Text>
          <Text style={styles.info}>{userInfo.first_name}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Фамилия:</Text>
          <Text style={styles.info}>{userInfo.last_name}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Отчество:</Text>
          <Text style={styles.info}>{userInfo.patro}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Статус:</Text>
          <Text style={styles.info}>{userInfo.role}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Дата рождения:</Text>
          <Text style={styles.info}>{userInfo.birth === null ? "установите дату рождения" : formatDate(userInfo.birth)}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Полис:</Text>
          <Text style={styles.info}>{userInfo.polic === null ? "установите полис" :userInfo.polic}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.info}>{userInfo.email}</Text>
        </View>
      </View>
      <BottomNavBar userData={userInfo}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileBlock: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  info: {
    fontSize: 16,
    color: '#777777',
  },
});

export default ProfileInfo;
