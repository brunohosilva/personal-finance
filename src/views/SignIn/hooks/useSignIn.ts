import {Alert, Keyboard} from 'react-native';
import auth from '@react-native-firebase/auth';
import * as Yup from 'yup';


import { useAppDispatch } from '../../../hooks/redux';
import { putUserInfos } from '../../../redux/slices/user/slice';

export const useSignIn = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const initialValues = {email: '', pass: ''};

  const submit = (
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    Keyboard.dismiss();
    auth()
      .signInWithEmailAndPassword(values.email, values.pass)
      .then(() => {
        dispatch(putUserInfos({email: values.email, token: '@TOKEN'}));
        navigation.replace('Home');
      })
      .catch(() => {
        Alert.alert('Atenção', 'Usuário ou senha incorretos');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const goToSignUp = () => {
    navigation.push('SignUp');
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor insira um e-mail válido')
      .required('Este campo é obrigatório'),
    pass: Yup.string().required('Este campo é obrigatório'),
  });


  return {
    SignInSchema,
    submit,
    goToSignUp,
    initialValues,
  };
}
