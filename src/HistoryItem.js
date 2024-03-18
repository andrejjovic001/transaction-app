export default function HistoryItem({ transaction, onDeleteTransaction }) {
  return (
    <li className={transaction.amount > 0 ? "green-notch" : "red-notch"}>
      <p>{transaction.text}</p>
      <p>${transaction.amount}</p>
      <button
        className="delete-btn"
        onClick={() => onDeleteTransaction(transaction.id, transaction.amount)}
      >
        ❌
      </button>
    </li>
  );
}
