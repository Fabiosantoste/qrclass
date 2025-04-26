import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (username && senha) {
      navigation.navigate('SelectClass');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>QR CLASS</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={setSenha} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.link}>Esqueceu suas credenciais? <Text style={{ color: '#8A2BE2' }}>Clique aqui</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 10 },
  button: { backgroundColor: '#8A2BE2', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff' },
  link: { marginTop: 20 }
});
