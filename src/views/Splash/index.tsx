import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { TSplashProps } from 'src/routes/types';
import Lottie from 'lottie-react-native';

export const Splash = ({ navigation }: TSplashProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 4000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash Screen</Text>
      <Lottie
        source={require('../../assets/splash/finance.json')}
        autoPlay
        loop
      />
    </View>
  );
};
