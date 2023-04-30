import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TTransactionItem } from '../../redux/slices/user/types';
import { useAppSelector } from '../../hooks/redux';
import {
  CategoryText,
  ContainerCategory,
  ContainerIcon,
  ContainerItemList,
  ContainerValue,
  DateText,
  Row,
  RowItem,
  TransactionContainer,
  TransactionText,
  ValueText,
} from './styles';

export const Transactions = () => {
  const refFlatList = useRef<FlatList>(null);
  const { transactions } = useAppSelector((store) => store.user);

  const Item = (item: TTransactionItem) => (
    <ContainerItemList>
      <DateText>{item.date}</DateText>
      <RowItem>
        <ContainerCategory>
          <ContainerIcon>
            <Icon name={item.icon} size={15} color='#000' />
          </ContainerIcon>
          <CategoryText>
            {item.type === 'spend' ? item.category : 'Depositado'}
          </CategoryText>
        </ContainerCategory>
        <ContainerValue>
          <ValueText type={item.type}>R$ {item.value}</ValueText>
        </ContainerValue>
      </RowItem>
    </ContainerItemList>
  );

  return (
    <TransactionContainer>
      <Row>
        <Icon name='exchange-alt' size={30} color='#000' />
        <TransactionText>Transações</TransactionText>
      </Row>
      <FlatList
        ref={refFlatList}
        inverted
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 30 }}
        data={transactions}
        onContentSizeChange={() =>
          refFlatList?.current?.scrollToEnd({ animated: true })
        }
        renderItem={({ item }) => (
          <Item
            id={item.id}
            category={item.category}
            icon={item.icon}
            value={item.value}
            description={item.description}
            date={item.date}
            type={item.type}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </TransactionContainer>
  );
};
