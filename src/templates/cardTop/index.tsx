import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Avatar,
  Container,
  Flex1,
  Flex4,
  FlexEnd,
  TextAvatar,
  Welcome,
  WelcomeName,
} from './styles';
import { useLogout } from './hooks/useLogout';

export const CardTop = ({ navigation }) => {
  const { handleLogout } = useLogout({ navigation });
  return (
    <Container>
      <Flex1>
        <Avatar>
          <TextAvatar>BR</TextAvatar>
        </Avatar>
      </Flex1>
      <Flex4>
        <WelcomeName>Olá, Bruno !</WelcomeName>
        <Welcome>Bem vindo de volta</Welcome>
      </Flex4>
      <FlexEnd>
        <Pressable onPress={handleLogout}>
          <Icon name='logout' size={20} color='#000000' />
        </Pressable>
      </FlexEnd>
    </Container>
  );
};
