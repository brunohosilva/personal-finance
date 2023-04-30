import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type PersonalFinanceStackParams = {
  Splash: undefined;
  SignIn: undefined;
  Home: undefined;
  Spendings: undefined;
  SignUp: undefined;
};

export type TSplashProps = NativeStackScreenProps<
  PersonalFinanceStackParams,
  'Splash'
>;

export type TSignInProps = NativeStackScreenProps<
  PersonalFinanceStackParams,
  'SignIn'
>;

export type TSignUpProps = NativeStackScreenProps<
  PersonalFinanceStackParams,
  'SignUp'
>;

export type THomeProps = NativeStackScreenProps<
  PersonalFinanceStackParams,
  'Home'
>;

export type TMoneyProps = BottomTabNavigationProp<
  PersonalFinanceStackParams,
  'Spendings'
>;
