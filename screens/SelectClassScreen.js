import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function SelectClassScreen({ navigation }) {
  const [turno, setTurno] = useState('Matutino');
  const turmas = [
    'Startups',
    'Programação web',
    'Engenharia de software',
    'Programação estruturada',
    'Redes de computadores',
    'Governança de T.I.',
    'Redes Neurais',
  ];

  return (
    <View style={styles.container}>
      <Text>Selecione sua turma:</Text>
      <View style={styles.turnos}>
        <TouchableOpacity onPress={() => setTurno('Matutino')}><Text>Matutino</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setTurno('Vespertino')}><Text>Vespertino</Text></TouchableOpacity>
      </View>
      <ScrollView>
        {turmas.map((turma, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('QRGenerate')}>
            <Text style={styles.link}>{turma}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
