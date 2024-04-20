import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardOffer = ({ onPress }) => {
  const navigation = useNavigation();

  const navigateToOffer = () => {
    navigation.navigate('Offer'); // Название экрана, на который вы хотите перейти
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToOffer}>
      <Text style={styles.text}>Хотите оформить карту?</Text>
      <Text style={styles.text}>Нажмите здесь!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 200,
    backgroundColor: '#90FF88',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardOffer;
