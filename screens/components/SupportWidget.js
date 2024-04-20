import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const SupportWidget = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.supportButton} onPress={onPress}>
        <Text style={styles.supportText}>Связаться с поддержкой</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      alignItems: 'center',
    },
    supportButton: {
      backgroundColor: '#90FF88',
      width: '80%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    supportText: {
      color: '#464646',
      fontSize: 16,
    },
  });

export default SupportWidget;
