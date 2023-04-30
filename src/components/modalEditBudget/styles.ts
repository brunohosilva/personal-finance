import { StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export const Row = styled.View`
    flex-direction: row;
    align-Items: center;
`;

export const TextButton = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;

export const TextFont25 = styled.Text`
    font-size: 25px;
`;

export const ButtonConfirm = styled.Pressable`
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
    background-color: #2196F3;
`;

export const ButtonCancel = styled.Pressable`
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    margin-top: 10px;
    background-color: red;
`;

export const ModalView = styled(Modal)`
  margin: 0px;
  justify-content: flex-end;
  flex: 1;
`;

export const ContainerModal = styled.View`
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  background-color: white;
  padding: 8px 20px 32px 20px;
`;

export const ContainerStars = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  background-color: #f2f2f2;
  margin: 16px;
  padding: 16px;
  border-radius: 16px;
  height: 104px;
`;

export const ContainerInputDescription = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TitleInput = styled.Text`
  font-size: 16px;
  color: gray;
`;

export const ContainerButtons = styled.View`
  padding: 0px 16px;
`;

export const SpacingStars = styled.View`
  margin-right: 18px;
`;

export const TitleModal = styled.Text`
  align-self: center;
  margin: 16px;
  font-size: 20px;
  font-weight: 700;
  color: gray;
`;

export const Spacing = styled.View`
  height: 16px;
`;
