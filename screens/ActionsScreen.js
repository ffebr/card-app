import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { getActionsData } from '../api/data/api.getActions';
import ActionCard from './components/ActionCard';
import { useNavigation, useRoute } from '@react-navigation/native';

const ActionsScreen = () => {

  const navigation = useNavigation();
  const route = useRoute()

  const actionsData = route.params.actions
  console.log(actionsData)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {actionsData.map((event, index) => (
        <ActionCard key={index} eventName={event.name}  action={event}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F1F1F1',
  },
});

export default ActionsScreen;
