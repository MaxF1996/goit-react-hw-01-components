import styled from 'styled-components';

export const TransactionsContainer = styled.table`
  margin: 0 auto 50px;
  max-width: 300px;
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 50%);
`;

export const TransactionsHead = styled.thead`
  background-color: #00bcd5;
  color: white;
`;

export const TransactionsHeadRow = styled.tr``;

export const TransactionsHeader = styled.th`
  text-transform: uppercase;
  padding: 10px;
  line-height: 1;
  :not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const TransactionsBody = styled.tbody`
  color: #88898c;
`;

export const TransactionsHistory = styled.tr`
  :nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const HistoryInfo = styled.td`
  text-align: center;
  padding: 12px 5px;
  :not(:last-child) {
    border-right: 1px solid #e4e4e4;
  }
`;
