import React from 'react';
import uuid from 'react-native-uuid';

import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { useAppDispatch } from '../../hooks/redux';
import {
  putItemTransaction,
  putUserBudget,
} from '../../redux/slices/user/slice';
import {
  ButtonCancel,
  ButtonConfirm,
  ContainerModal,
  ModalView,
  Row,
  TextButton,
  TextFont25,
  TitleModal,
  styles,
} from './styles';
import { TTransactionItem } from '../../redux/slices/user/types';

export const ModalEditBudget = ({
  editBudget = '0.00',
  modalBudgetVisible,
  setEditBudget,
  setModalBudgetVisible,
}) => {
  const dispatch = useAppDispatch();

  const registerAddBudget = () => {
    const data: TTransactionItem = {
      id: String(uuid.v4()),
      category: 'Budget',
      type: 'budget',
      icon: 'money-bill-alt',
      value: Number(editBudget),
      description: '',
      date: new Date().toLocaleDateString('pt-BR'),
    };
    setModalBudgetVisible(!modalBudgetVisible);
    dispatch(putItemTransaction(data));
    dispatch(putUserBudget(Number(editBudget)));
    setEditBudget(0);
  };

  return (
    <ModalView isVisible={modalBudgetVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ContainerModal>
          <TitleModal>Adicionar Renda</TitleModal>

          <Row>
            <TextFont25>R$ </TextFont25>
            <TextInput
              style={{ fontSize: 25 }}
              onChangeText={setEditBudget}
              value={editBudget}
              keyboardType='numeric'
            />
          </Row>
          <ButtonConfirm
            onPress={() => {
              registerAddBudget();
            }}
          >
            <TextButton>Confirmar</TextButton>
          </ButtonConfirm>
          <ButtonCancel
            onPress={() => {
              setModalBudgetVisible(!modalBudgetVisible);
            }}
          >
            <TextButton>Cancelar</TextButton>
          </ButtonCancel>
        </ContainerModal>
      </KeyboardAvoidingView>
    </ModalView>
  );
};
