import React from 'react';
import uuid from 'react-native-uuid';
import {
  TextInput,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  ButtonCancel,
  ButtonConfirm,
  ContainerModal,
  ModalView,
  TextButton,
  styles,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import { useAppDispatch } from '../../hooks/redux';
import { putItemTransaction } from '../../redux/slices/user/slice';
import { TTransactionItem } from '../../redux/slices/user/types';

export const ModalSpendRegister = ({
  modalSpendVisible,
  setModalSpendVisible,
}) => {
  const dispatch = useAppDispatch();

  const [spend, setSpend] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const registerNewSpend = () => {
    const data: TTransactionItem = {
      id: String(uuid.v4()),
      category,
      type: 'spend',
      icon: 'money-bill-alt',
      value: Number(spend) * -1,
      description,
      date: date.toLocaleDateString('pt-BR'),
    };

    dispatch(putItemTransaction(data));
  };

  return (
    <ModalView isVisible={modalSpendVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ContainerModal>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
          >
            Adicionar novo gasto
          </Text>

          <RNPickerSelect
            placeholder={{
              label: 'Adicione uma categoria',
            }}
            onValueChange={(value) => setCategory(value)}
            items={[
              { label: 'Mercado', value: 'Mercado' },
              { label: 'Posto', value: 'Posto' },
              { label: 'Farmacia', value: 'Farmacia' },
            ]}
          />

          <TextInput
            keyboardType='numeric'
            placeholder='Adicione o valor do gasto'
            style={{
              height: 40,
              margin: 10,
              borderWidth: 2,
              padding: 10,
              borderRadius: 15,
              width: '100%',
            }}
            onChangeText={setSpend}
            value={spend}
          />

          <TextInput
            placeholder='Adicione uma descrição'
            style={{
              height: 40,
              margin: 10,
              borderWidth: 2,
              padding: 10,
              borderRadius: 15,
              width: '100%',
            }}
            onChangeText={setDescription}
            value={description}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Data: <Text>{date.toLocaleDateString('pt-BR')}</Text>
            </Text>
            <Pressable onPress={() => setOpen(true)}>
              <Icon name='calendar' size={20} color='#000000' />
            </Pressable>
          </View>

          <DatePicker
            mode='date'
            modal
            locale='pt-BR'
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <ButtonConfirm
            onPress={() => {
              setModalSpendVisible(!modalSpendVisible);
              registerNewSpend();
            }}
          >
            <TextButton>Confirmar</TextButton>
          </ButtonConfirm>
          <ButtonCancel
            onPress={() => {
              setModalSpendVisible(!modalSpendVisible);
            }}
          >
            <TextButton>Cancelar</TextButton>
          </ButtonCancel>
        </ContainerModal>
      </KeyboardAvoidingView>
    </ModalView>
  );
};
