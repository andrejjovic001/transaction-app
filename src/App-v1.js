import Balance from "./Balance";
import HistoryTransation from "./HistoryList";
import Form from "./Form";
import { useEffect, useState } from "react";

function App() {
  const [transactionArray, setTransactionArray] = useState([]);

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function handleAddTransaction(transaction) {
    setTransactionArray((prevTransactions) => [
      ...prevTransactions,
      transaction,
    ]);

    const newTransactions = [...transactionArray, transaction];
    const lastTransaction = newTransactions[newTransactions.length - 1];

    if (lastTransaction.amount > 0)
      setIncome((prevIncome) => prevIncome + lastTransaction.amount);
    else setExpense((prevExpense) => prevExpense + lastTransaction.amount);
  }

  function handleDeleteTransaction(id, amount) {
    setTransactionArray((prevTransaction) =>
      prevTransaction.filter((transaction) => transaction.id !== id)
    );

    if (amount > 0) {
      setIncome((prevIncome) => prevIncome - amount);
    } else {
      setExpense((prevExpense) => prevExpense + Math.abs(amount));
    }
  }

  function handleResetTransaction() {
    setTransactionArray([]);
    setIncome(0);
    setExpense(0);
  }

  return (
    <div>
      <main>
        <h1>Transaction App</h1>
        <Balance
          income={income}
          expense={expense}
          onReset={handleResetTransaction}
        />
        <HistoryTransation
          transactionArray={transactionArray}
          onDeleteTransaction={handleDeleteTransaction}
        />
        <Form onAddTransaction={handleAddTransaction} />
      </main>
    </div>
  );
}

export default App;
