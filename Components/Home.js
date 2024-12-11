import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import styles from '../assets/appstyles';

export function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [student_id, setStudentID] = useState('');
  

  const handleRegister = () => {
    alert(
      `Login with:
      Student ID: ${student_id},
      Email: ${email},`
    );
  };

  return (
    <View style={styles.container}>
      {/* Display Logo */}
      <Image style={styles.logo} source={require('../assets/TUDublin.png')} />
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor.
      </Text>

      {/* Registration Form */}
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleRegister} />
    </View>
  );
}