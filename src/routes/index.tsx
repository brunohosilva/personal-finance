import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

import { SignIn, SignUp, Home, Dashboard, Splash } from '../views';

const Stack = createStackNavigator() as any;
const Tab = createBottomTabNavigator();

function TabsStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={Home}
        options={{
          tabBarLabel: 'Meu orçamento',
          tabBarIcon: () => (
            <FontAwesome name='dollar' size={20} color='#000000' />
          ),
        }}
      />
      <Tab.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => (
            <Foundation name='graph-pie' size={20} color='#000000' />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Home' component={TabsStack} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}

export { Router };
