import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Tab = createMaterialTopTabNavigator();

function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [student_id, setStudentID] = useState('');

  const handleRegister = () => {
    alert(`login with:
      Student ID: ${student_id},
      Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/firebase-icon.png')} />

      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={student_id}
        onChangeText={setStudentID}
      />
            <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

// Color Picker Screen Component
function ColorPickerScreen() {
  const [selectedColor, setSelectedColor] = useState("Red");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Favorite Color</Text>
      <Picker style={styles.picker} selectedValue={selectedColor} onValueChange={setSelectedColor}>
        <Picker.Item label="Red" value="Red" />
        <Picker.Item label="Blue" value="Blue" />
        <Picker.Item label="Green" value="Green" />
        <Picker.Item label="Purple" value="Purple" />
      </Picker>
      <Text style={styles.selectedColorText}>Selected Color: {selectedColor}</Text>
    </View>
  );
}

// Main App Component with Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Register" component={RegistrationScreen} />
        <Tab.Screen name="Favorite Color" component={ColorPickerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 40,
  },
  selectedColorText: {
    marginTop: 20,
    fontSize: 18,
  },
});
