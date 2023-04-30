import React from 'react';
import { View, Text, Image } from 'react-native';
import { Formik } from 'formik';

import { styles } from './styles';

import { useSignIn } from './hooks/useSignIn';
import { Input, Button } from '../../components';
import { TSignInProps } from '../../routes/types';

export const SignIn = ({ navigation }: TSignInProps) => {
  const { initialValues, SignInSchema, submit, goToSignUp } = useSignIn({
    navigation,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Controle de\nFinanças`}</Text>
      <Image
        source={require('../../assets/img/budget.png')}
        style={{ width: 50, height: 50 }}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => submit(values, setSubmitting)}
      >
        {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
          <>
            <Input
              placeholder={'Digite seu e-mail'}
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
              autoCapitalize='none'
              keyboardType='email-address'
            />
            <Input
              placeholder={'Digite sua senha'}
              value={values.pass}
              secureTextEntry
              onChangeText={handleChange('pass')}
              error={errors.pass}
              autoCapitalize='none'
            />
            <Button
              type='secondary'
              disabled={isSubmitting}
              text={isSubmitting ? 'Carregando...' : 'Entrar'}
              onPress={() => handleSubmit()}
            />
            <Button type='primary' text={'Cadastrar'} onPress={goToSignUp} />
          </>
        )}
      </Formik>
    </View>
  );
};
