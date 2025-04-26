import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CheckinScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>STARTUPS - 12/09/2023</Text>
      <Image source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CheckinQR' }} style={{ width: 150, height: 150 }} />
      <Text>Instituição: Católica</Text>
      <TextInput placeholder="Matrícula" style={styles.input} />
      <Button title="Realizar Check-in" color="#A020F0" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate('JustifyAbsence')}>
        <Text style={styles.link}>Justificar ausência? Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
