import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking, Alert, Dimensions, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const updateScreen = () => {
        setIsMobile(Dimensions.get('window').width <= 600);
      };
  
      Dimensions.addEventListener('change', updateScreen);
      updateScreen(); // Initial check
  
      return () => Dimensions.removeEventListener('change', updateScreen);
    }, []);



    // temporary code above - underconstruction //


    const [width, setWidth] = useState<number>(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;



      // coding underconstruction //
