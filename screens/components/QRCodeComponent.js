import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeComponent = ({ data }) => {

  return (
    <View style={styles.container}>
      <QRCode value={data} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QRCodeComponent;
