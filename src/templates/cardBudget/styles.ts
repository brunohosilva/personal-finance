import styled from 'styled-components/native';

type TStatusProps = {
    status: boolean;
}

export const Container = styled.View<TStatusProps>`
    background-color: ${(props) => props.status ? '#a5fb82' : '#f95959'};
    border-radius: 15px;
    align-items: center;
    margin-top: 30px;
    padding: 15px;
`;

export const MonthBudgetText = styled.Text`
    font-size: 12px;
    text-align: center;
    font-weight: bold;
`;

export const ValueBudget = styled.Text`
    font-size: 40px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
`;

export const ButtonModal = styled.Pressable<TStatusProps>`
    flex-direction: row;
    background-color: ${(props) => props.status ? '#7ee953' : '#dc2f2f'};
    padding: 10px;
    border-radius: 99px;
    align-items: center;
`;




