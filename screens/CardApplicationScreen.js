import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CardApplicationScreen = () => {
  const [selectedType, setSelectedType] = useState('Студент');

  const handleConfirm = () => {
    // Ваша логика подтверждения оформления карты
    console.log('Оформление карты подтверждено:', selectedType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите тип карты:</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          value={selectedType}
          onValueChange={(value) => setSelectedType(value)}
          items={[
            { label: 'Студент', value: 'Студент' },
            { label: 'Школьник', value: 'Школьник' },
            { label: 'Рабочий', value: 'Рабочий' },
          ]}
          style={pickerSelectStyles}
        />
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Подтвердить</Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '80%',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#90FF88',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#464646',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    color: 'black',
  },
  inputAndroid: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#cccccc',
    borderRadius: 8,
    color: 'black',
  },
});

export default CardApplicationScreen;
