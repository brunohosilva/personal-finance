import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';

import { Input, Button } from '../../components';
import { styles } from './styles';
import { useSignUp } from './hooks/useSignUp';
import { TSignUpProps } from '../../routes/types';

export const SignUp = ({ navigation }: TSignUpProps) => {
  const { initialValues, SignUpSchema, submit, goToSignIn } = useSignUp({
    navigation,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realize seu cadastro</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => submit(values, setSubmitting)}
      >
        {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
          <>
            <Input
              placeholder={'Digite seu nome'}
              value={values.name}
              onChangeText={handleChange('name')}
              error={errors.name}
              autoCapitalize='words'
            />
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
            <Input
              placeholder={'Digite novamente'}
              value={values.confirmPass}
              secureTextEntry
              onChangeText={handleChange('confirmPass')}
              error={errors.confirmPass}
              autoCapitalize='none'
            />
            <Button
              type='secondary'
              disabled={isSubmitting}
              text={isSubmitting ? 'Carregando...' : 'Cadastrar'}
              onPress={() => handleSubmit()}
            />
            <Button
              type='primary'
              text={'Entrar com e-mail'}
              onPress={goToSignIn}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
