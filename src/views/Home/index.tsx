import React from 'react';
import { ModalEditBudget } from '../../components/modalEditBudget';
import { THomeProps } from '../../routes/types';
import { useModalHooks } from '../../components/modalEditBudget/hooks';
import { CardBudget } from '../../templates/cardBudget';
import { CardTop } from '../../templates/cardTop';
import { Transactions } from '../../templates/transactions';
import { Container, SafeArea } from './styles';
import { ModalSpendRegister } from '../../components/modalSpendRegister';
import { useModalSpendHooks } from '../../components/modalSpendRegister/hooks';
import { View } from 'react-native';

export const Home = ({ navigation }: THomeProps) => {
  const {
    editBudget,
    modalBudgetVisible,
    setEditBudget,
    setModalBudgetVisible,
  } = useModalHooks();

  const { modalSpendVisible, setModalSpendVisible } = useModalSpendHooks();

  return (
    <SafeArea style={{ backgroundColor: '#f8f7f0' }}>
      <Container>
        <View style={{ flex: 1 }}>
          <CardTop navigation={navigation} />
        </View>
        <View style={{ flex: 3 }}>
          <CardBudget
            setModalBudgetVisible={setModalBudgetVisible}
            setModalSpendVisible={setModalSpendVisible}
          />
        </View>
        <View style={{ flex: 6 }}>
          <Transactions />
        </View>
      </Container>

      <ModalSpendRegister
        modalSpendVisible={modalSpendVisible}
        setModalSpendVisible={setModalSpendVisible}
      />

      <ModalEditBudget
        editBudget={editBudget}
        modalBudgetVisible={modalBudgetVisible}
        setEditBudget={setEditBudget}
        setModalBudgetVisible={setModalBudgetVisible}
      />
    </SafeArea>
  );
};
