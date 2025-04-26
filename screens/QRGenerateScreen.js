import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QRGenerateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Startups - Matutino</Text>
      <Button title="Gerar QR Code" color="#A020F0" onPress={() => navigation.navigate('Frequency')} />
    </View>
  );
}
