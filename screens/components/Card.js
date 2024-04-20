import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

const Card = ({ cardNumber, userFirstName, userLastName}) => {

  const writeDataToNfcTag = async () => {
    try {
      const data = cardNumber;
      console.log(typeof(data))
      const bytes = NfcManager.stringToBytes(data);
      const tech = NfcTech.Ndef;

      await NfcManager.requestTechnology(tech);
  
      const tag = await NfcManager.getTag();
      if (!tag) {
        throw new Error('Метка NFC не найдена');
      }

      await NfcManager.writeNdefMessage(bytes);
  
      console.log('Данные успешно записаны на метку NFC');
    } catch (error) {
      console.error('Ошибка при записи на метку NFC:', error);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.qrCode}>
          <QRCode
            value={cardNumber}
            size={50}
          />
        </View>
        <TouchableOpacity style={styles.nfcIcon} onPress={writeDataToNfcTag}>
          <Image
            source={require('../../assets/nfc.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <Text style={styles.cardNumber}>{`${userFirstName} ${userLastName}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    width: 350,
    height: 200,
    backgroundColor: '#90FF88',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    position: 'relative', // Добавлено позиционирование для добавления QR-кода и иконки NFC
  },
  qrCode: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  nfcIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardNumber: {
    fontSize: 20,
    color: 'black',
    letterSpacing: 2,
  },
});

export default Card;
