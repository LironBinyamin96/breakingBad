import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native';
import Style from './utility/style';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomBar } from './navigation/index';

export default function App() {
  return (
      <NavigationContainer>
        <AppBottomBar/>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}