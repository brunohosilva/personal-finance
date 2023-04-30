import React, { useEffect, useState } from 'react';
import { View, Dimensions, ActivityIndicator, Text } from 'react-native';

import { PieChart } from 'react-native-chart-kit';
import { setColorCategoryPieChart } from '../../helpers/setColorCategoriePieChart';
import { useAppSelector } from '../../hooks/redux';

export const Dashboard = () => {
  const { transactions } = useAppSelector((state) => state.user);
  const [dataChart, setDataChart] = useState([
    {
      name: '',
      value: 0,
      color: '',
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let res = Object.values(
      transactions.reduce((acc: any, curr: any) => {
        (acc[curr.category] = acc[curr.category] || {
          category: curr.category,
          value: 0,
        }).value += Math.abs(curr.value);
        return acc;
      }, {}),
    );

    const bla = res.map(({ category, value }: any) => {
      return {
        name: category,
        value: value,
        color: setColorCategoryPieChart(category),
      };
    });

    setDataChart(bla);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [transactions]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <>
          <ActivityIndicator />
          <Text style={{ fontSize: 30 }}>Carregando ...</Text>
        </>
      ) : (
        <>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Dashboard</Text>
          <PieChart
            data={dataChart}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor='value'
            backgroundColor='transparent'
            paddingLeft='0'
          />
        </>
      )}
    </View>
  );
};
