import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 40,
        }}
      >
        <TextInput
          placeholder='Digite seu e-mail'
          label='E-mail'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ width: '100%', marginBottom: 50 }}
          contentStyle={{ backgroundColor: 'white' }}
        />

        <TextInput
          placeholder='Digite sua senha'
          label='Senha'
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ width: '100%', marginBottom: 50 }}
          contentStyle={{ backgroundColor: 'white' }}
        />

        <View style={{ width: '100%' }}>
          <Button
            mode='contained'
            onPress={() => navigation.navigate('Home')}
            style={{ width: '100%', marginBottom: 50 }}
            contentStyle={{ backgroundColor: '#a5fb82' }}
            textColor='black'
          >
            Continuar
          </Button>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            marginBottom: 50,
            flexDirection: 'row',
          }}
        >
          <View style={{ borderWidth: 0.4, flex: 4 }} />
          <Text style={{ flex: 1, textAlign: 'center' }}>Ou</Text>
          <View style={{ borderWidth: 0.4, flex: 4 }} />
        </View>

        <View>
          <Text>
            Não tem uma conta?
            <Text
              style={{ fontWeight: 'bold' }}
              onPress={() => console.log('Criar conta')}
            >
              {' '}
              Crie agora
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
