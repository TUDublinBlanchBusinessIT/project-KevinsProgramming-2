import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';


const Tab = createMaterialTopTabNavigator();

function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [student_id, setStudentID] = useState('');

  const handleRegister = () => {
    alert(`Register with:
      Student ID: ${student_id},
      Email: ${email}`);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/TUDublin.png')} />

      <View style={styles.articleContentContainer}>
        <Text style={styles.articleContent}>
          Your mini guide to live, work, invest and study at TU Dublin
        </Text>
      </View>

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


     <Text style={styles.heading}>Why TUD?</Text>
      <Text style={styles.article}>
        Travelio is an established organisation with the primary goal of fostering a collaborative space where
        participants can effortlessly exchange valuable tips and insights...
      </Text>

      <Text style={styles.subHeading}>What We Offer</Text>
      <Text style={styles.article}>
        Travelio is a committed online resource that has been helping prospective students find courses and colleges
        around the world for a number of years...
      </Text>

      <Text style={styles.subHeading}>What To Look Forward To</Text>
      <Text style={styles.article}>
        "Exciting prospects lie ahead, and anticipation is in the air." Uncharted territories and fresh starts
        abound; the possibilities are endless...
      </Text>

















    <View style={styles.footer}>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:B00157434@mytudublin.ie')}>
          <Text style={styles.footerLink}>Send an Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+00353861111111')}>
          <Text style={styles.footerLink}>Call us on 086 1111 111</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.tudublin.ie/')}>
          <Text style={styles.footerLink}>Visit the TUD website</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}


function ColorPickerScreen() {
  const [selectedColor, setSelectedColor] = useState("Course");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Course Code</Text>
      <Picker style={styles.picker} selectedValue={selectedColor} onValueChange={setSelectedColor}>
        <Picker.Item label="TU777 Business & IT" value="TU777 Business & IT" />
        <Picker.Item label="TU913 General Business" value="TU913 General Business" />
        <Picker.Item label="TU645 Architecture" value="TU645 Architecture" />
        <Picker.Item label="TU771 Music Studies" value="TU771 Music Studies" />
        <Picker.Item label="TU662 Nursing" value="TU662 Nursing" />
        <Picker.Item label="TU871 Engineering" value="TU871 Engineering" />
        <Picker.Item label="TU502 Interior Design" value="TU502 Interior Design" />
        <Picker.Item label="TU910 Arts" value="TU910 Arts" />
      </Picker>
      <Text style={styles.selectedColorText}>Selected Course: {selectedColor}</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RegistrationScreen} />
        <Tab.Screen name="Course Picker" component={ColorPickerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 160,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
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
  footer: {
    backgroundColor: 'rgb(229, 192, 157)',
    padding: 20,
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  article: {
    fontSize: 16,
    paddingHorizontal: 20,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    color: 'palevioletred',
    textAlign: 'center',
    marginVertical: 20,
  },
  subHeading: {
    fontSize: 20,
    color: 'palevioletred',
    textAlign: 'center',
    marginVertical: 10,
  },
  articleContentContainer: {
    backgroundColor: '#ebebeb',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});