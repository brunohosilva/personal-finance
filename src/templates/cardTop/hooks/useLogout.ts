import auth from '@react-native-firebase/auth';
import { useAppDispatch } from '../../..//hooks/redux';
import { setClearUser } from '../../../redux/slices/user/slice';

export const useLogout = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await auth().signOut().then(() => {
      dispatch(setClearUser())
      navigation.navigate('SignIn')
    });
  }

  return {
    handleLogout
  }
}