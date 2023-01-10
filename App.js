import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import lottie from './lottie.json';

//import {Container} from './styles';

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie resizeMode="contain" Size="20" source={lottie} autoPlay loop />
    </SafeAreaView>
  );
}
