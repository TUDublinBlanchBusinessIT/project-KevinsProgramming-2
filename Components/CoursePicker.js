import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 


export default function ColorPickerScreen() {

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Your Favorite Color</Text>
      
      <Picker
        style={styles.picker}
        selectedValue={selectedColor}
        onValueChange={(value) => setSelectedColor(value)} 
      >
        {colorList.map((color, index) => {
          return <Picker.Item key={index} label={color} value={color} />;
        })}
      </Picker>


      <Image
        source={require('../assets/TUDublin.png')} 
        style={{ width: 100, height: 100, alignSelf: 'center', margin: 20 }}
      />


      <Text style={styles.selectedColorText}>Selected Color: {selectedColor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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