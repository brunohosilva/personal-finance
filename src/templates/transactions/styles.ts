import styled from 'styled-components/native';

type ValueTextProps = {
    type: string
}

export const TransactionContainer = styled.View`
    margin-top: 30px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;

export const RowItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;

export const ContainerCategory = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 5;
`;

export const TransactionText = styled.Text`
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
`;

export const ContainerItemList = styled.View`
    margin-bottom: 15px;
    width: 100%;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
`;

export const DateText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #cececb;
`;

export const CategoryText = styled.Text`
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
`;

export const ValueText = styled.Text<ValueTextProps>`
    font-weight: bold;
    font-size: 16px;
    color: ${(props) => props.type === 'spend' ? 'red' : '#5abb84'}
`;

export const ContainerIcon = styled.View`
    background-color: #efefef;
    padding: 8px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const ContainerValue = styled.View`
    flex: 3;
    align-items: flex-end;
`;




