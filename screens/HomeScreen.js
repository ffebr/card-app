import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Card from './components/Card';
import { getUserData } from '../api/data/api.user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardOffer from './components/CardOffer';
import BottomNavBar from './components/BottomNavBar';
import { getActionsData, getEventsData } from '../api/data/api.getActions';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const [userData, setUserData] = useState({})
  const [actionsData, setActionsData] = useState([])
  const [eventsData, setEventsData] = useState([])
  const navigation = useNavigation();

  const navigateToActions = () => {
    navigation.navigate('Actions', {actions: actionsData})
  }

  const navigateToEvents = () => {
    navigation.navigate('Actions', {actions: eventsData})
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const uid = await AsyncStorage.getItem('user_id');
        const data = await getUserData(uid);
        const actions = await getActionsData();
        const events = await getEventsData();
        const tempAction = [];
        const tempEvents = []
        actions.map((act) => tempAction.push(act))
        setActionsData(tempAction)
        setUserData(data);

        events.map((evt) => tempEvents.push(evt))
        setEventsData(tempEvents)
      } catch (error) {
        console.log('Ошибка при загрузке данных:', error);
      }
    };

    fetchData();
    
  }, [])
  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {'card' in userData ? <Card cardNumber={`${userData.card.series_card}${userData.card.last_card_number}`} userFirstName={userData.first_name} userLastName={userData.last_name}></Card> : <CardOffer/>}
      </View>
      <View style={styles.partnerCards}>
        <Text style={styles.cardName}>Может быть интересно</Text>
        <TouchableOpacity style={styles.cardItem} onPress={navigateToActions}>
          <Text style={styles.cardName}>Предложения</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardItem} onPress={navigateToEvents}>
          <Text style={styles.cardName}>Мероприятия</Text>
        </TouchableOpacity>
      </View>
      <BottomNavBar userData={userData}></BottomNavBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1', // Цвет фона контейнера
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Цвет фона для компонента Card
  },
  partnerCards: {
    flex: 2,
    padding: 20,
    backgroundColor: '#FFFFFF', // Цвет фона для ScrollView
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#777777', // Цвет верхней границы нижней навигации
    backgroundColor: '#FFFFFF', // Цвет фона нижней навигации
  },
  navigationItem: {
    paddingVertical: 10,
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
