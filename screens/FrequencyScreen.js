import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function FrequencyScreen() {
  const frequencias = [
    { data: '09/09/2023', valor: '100%' },
    { data: '09/09/2023', valor: '50%' },
    { data: '09/09/2023', valor: '70%' },
    { data: '09/09/2023', valor: '100%' },
    { data: '09/09/2023', valor: '90%' },
    { data: '09/09/2023', valor: '70%' },
    { data: '09/09/2023', valor: '90%' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text>Frequência:</Text>
      {frequencias.map((f, i) => (
        <Text key={i}>{f.data} - {f.valor}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, width: '90%', marginBottom: 10, borderRadius: 8 },
  link: { color: '#A020F0', marginTop: 10 },
  turnos: { flexDirection: 'row', gap: 20, marginVertical: 10 },
  textarea: { borderWidth: 1, borderColor: '#ccc', padding: 8, width: '90%', minHeight: 100, marginBottom: 10, borderRadius: 8 },
});