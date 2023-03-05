// import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import {
  TransactionsContainer,
  TransactionsHead,
  TransactionsHeadRow,
  TransactionsHeader,
  TransactionsBody,
  TransactionsHistory,
  HistoryInfo,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionsContainer>
      <TransactionsHead>
        <TransactionsHeadRow>
          <TransactionsHeader>Type</TransactionsHeader>
          <TransactionsHeader>Amount</TransactionsHeader>
          <TransactionsHeader>Currency</TransactionsHeader>
        </TransactionsHeadRow>
      </TransactionsHead>
      <TransactionsBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionsHistory key={id}>
            <HistoryInfo>{type}</HistoryInfo>
            <HistoryInfo>{amount}</HistoryInfo>
            <HistoryInfo>{currency}</HistoryInfo>
          </TransactionsHistory>
        ))}
      </TransactionsBody>
    </TransactionsContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
