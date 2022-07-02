import PropTypes from 'prop-types';
import styles from './Transactions.module.css'

export default function Transactions({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead >
        <tr className={styles.titles}>
          <th className={styles.itemHead}>Type</th>
          <th className={styles.itemHead}>Amount</th>
          <th className={styles.itemHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={styles.list} key={item.id}>
            <td className={styles.itemBody} style={{fontWeight:"500"}}>{item.type}</td>
            <td className={styles.itemBody}>{item.amount}</td>
            <td className={styles.itemBody}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            currency: PropTypes.string,
          amount: PropTypes.string,
          type: PropTypes.string,
          id: PropTypes.string,
        })
      ),
}