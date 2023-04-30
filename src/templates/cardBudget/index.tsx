import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useAppSelector } from '../../hooks/redux';
import {
  ButtonModal,
  ButtonsContainer,
  Container,
  MonthBudgetText,
  ValueBudget,
} from './styles';

export const CardBudget = ({ setModalBudgetVisible, setModalSpendVisible }) => {
  const { transactions } = useAppSelector((store) => store.user);
  const [budgetTotal, setBudgetTotal] = useState<number>(0);

  useEffect(() => {
    let sumTotalSpend = transactions.reduce((sum, currentPick) => {
      return sum + currentPick.value;
    }, 0);

    setBudgetTotal(Number(sumTotalSpend));
  }, [transactions]);

  return (
    <Container status={budgetTotal >= 0}>
      <MonthBudgetText>Seu orçamento total mensal</MonthBudgetText>
      <ValueBudget>R$ {budgetTotal}</ValueBudget>
      <ButtonsContainer>
        <ButtonModal
          status={budgetTotal >= 0}
          onPress={() => setModalBudgetVisible(true)}
        >
          <View style={{ transform: [{ rotate: '90deg' }], marginRight: 10 }}>
            <Icon name='login' size={20} color='#000000' />
          </View>

          <Text>Incluir renda</Text>
        </ButtonModal>

        <ButtonModal
          status={budgetTotal >= 0}
          onPress={() => setModalSpendVisible(true)}
        >
          <View style={{ transform: [{ rotate: '270deg' }], marginRight: 10 }}>
            <Icon name='logout' size={20} color='#000000' />
          </View>

          <Text>Incluir gastos</Text>
        </ButtonModal>
      </ButtonsContainer>
    </Container>
  );
};
