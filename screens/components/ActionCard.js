import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const ActionCard = ({ eventName, action }) => {
  const navigation = useNavigation();
  const navigateToAbout = () => {
    navigation.navigate('About', {action: action})
  }
  
  return (
    <TouchableOpacity style={styles.card} onPress={navigateToAbout}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventName}>{action.partner_name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#90FF88',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '100%', // Ширина равна 100% от родительского контейнера
    height: 70,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "black",
  },
});

export default ActionCard;
