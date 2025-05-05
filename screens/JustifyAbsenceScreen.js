import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function JustifyAbsenceScreen() {
  return (
    <View style={styles.container}>
      <Text>QRCLASS - 12/09/2023</Text>
      <TextInput placeholder="Matrícula" style={styles.input} />
      <Text>Justificativa:</Text>
      <TextInput style={styles.textarea} multiline numberOfLines={4} />
      <Button title="Enviar" color="#A020F0" onPress={() => {}} />
    </View>
  );
}
