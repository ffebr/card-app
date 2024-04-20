import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const BottomNavBar = ({userData}) => {
  const navigation = useNavigation();
  const handlePressMain = () => {
    navigation.navigate('Home');
  };

  const handlePressProfile = () => {
    navigation.navigate('Profile', {userData: userData});
  };

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navigationItem} onPress={handlePressMain}>
        <Text>Главная</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navigationItem} onPress={handlePressProfile}>
        <Text>Профиль</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BottomNavBar;
