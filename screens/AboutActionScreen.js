import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomNavBar from './components/BottomNavBar';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from '../api/dateFormat';

const AboutActions = () => {
  const route = useRoute();
  const actionInfo = route.params.action;
  console.log(actionInfo)
  const navigation = useNavigation();


  if ('conditions' in actionInfo) {
    return <>
      <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Название:</Text>
          <Text style={styles.info}>{actionInfo.name}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Партнер:</Text>
          <Text style={styles.info}>{actionInfo.partner_name}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Описание:</Text>
          <Text style={styles.info}>{actionInfo.description}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Условия:</Text>
          <Text style={styles.info}>{actionInfo.conditions}</Text>
        </View>
      </View>
    </View>
    </>
  } else return <>
      <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Название:</Text>
          <Text style={styles.info}>{actionInfo.name}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Партнер:</Text>
          <Text style={styles.info}>{actionInfo.partner_name}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Место:</Text>
          <Text style={styles.info}>{actionInfo.location}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Описание:</Text>
          <Text style={styles.info}>{actionInfo.event_desc}</Text>
        </View>
        <View style={styles.profileBlock}>
          <Text style={styles.label}>Бонусы:</Text>
          <Text style={styles.info}>{actionInfo.advantages}</Text>
        </View>
      </View>
    </View>
  </>
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

export default AboutActions;
