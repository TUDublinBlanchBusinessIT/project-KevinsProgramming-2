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


      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        navigationBar: {
          backgroundColor: '#242222',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        },
        logo: {
          height: 60,
          width: 60,
        },
        navLinks: {
          flexDirection: 'row',
        },
        navLinksMobile: {
          flexDirection: 'column',
        },
        navLink: {
          color: 'white',
          fontSize: 16,
          padding: 10,
          opacity: 0.7,
        },
        activeNavLink: {
          color: 'orange',
        },
        heroSection: {
          backgroundColor: '#000',
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url('https://example.com/TUDhero.jpg')`, // Replace with hosted image URL
        },
        heroTextTitle: {
          fontSize: 24,
          color: '#fff',
          fontWeight: 'bold',
        },
        heroTextSubtitle: {
          fontSize: 16,
          color: '#fff',
        },
        articleContentContainer: {
          backgroundColor: '#ebebeb',
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
        articleContent: {
          fontSize: 16,
          textAlign: 'center',
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
        article: {
          fontSize: 16,
          paddingHorizontal: 20,
          lineHeight: 24,
          textAlign: 'justify',
          marginBottom: 10,
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
      });

      
      // code above is at the bottome //
