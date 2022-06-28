import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import image from './media/wellness.png';

export default function App() {
  return (
    <View style={styles.container}>
      <header>Wellness App</header>
      <div id='image'>
        <img src={image} className="logo" alt="wellness image"/>
      </div>
      <div>
        <button>link</button>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    flex: 1,
    backgroundColor: '#cdedda',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
