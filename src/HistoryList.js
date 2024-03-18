import HistoryItem from "./HistoryItem";

export default function HistoryTransation({
  transactionArray,
  onDeleteTransaction,
}) {
  return (
    <div className="history">
      <h2>History</h2>
      <div className="under-line"></div>
      <ul>
        {transactionArray.map((transaction) => (
          <HistoryItem
            transaction={transaction}
            key={transaction.id}
            onDeleteTransaction={onDeleteTransaction}
          />
        ))}

        {/* <li className="green-notch">
          <p>Cash</p>
          <p>500</p>
        </li> */}
      </ul>
    </div>
  );
}
