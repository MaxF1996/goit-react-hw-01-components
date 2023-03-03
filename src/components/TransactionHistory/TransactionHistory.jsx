import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.thead}>
        <tr className={css['thead-row']}>
          <th className={css.theader}>Type</th>
          <th className={css.theader}>Amount</th>
          <th className={css.theader}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.history}>
            <td className={css.historyInfo}>{type}</td>
            <td className={css.historyInfo}>{amount}</td>
            <td className={css.historyInfo}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
