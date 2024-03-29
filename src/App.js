import Balance from "./Balance";
import HistoryTransation from "./HistoryList";
import Form from "./Form";
import { useEffect, useState } from "react";

function App() {
  const initialTransaction =
    JSON.parse(localStorage.getItem("transaction")) || []; // Da se dohvate podaci iz localstorage ako ih ima ili u suprotonom da se postavi []

  const [transactionArray, setTransactionArray] = useState(initialTransaction);

  const initialIncome = JSON.parse(localStorage.getItem("income")) || 0;
  const initialExpense = JSON.parse(localStorage.getItem("expense")) || 0;

  const [income, setIncome] = useState(initialIncome);
  const [expense, setExpense] = useState(initialExpense);

  function handleAddTransaction(transaction) {
    setTransactionArray((prevTransactions) => [
      ...prevTransactions,
      transaction,
    ]);

    const lastTransaction = transaction;

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

  // Svaki put kada se desi dodavanje itema u transactionArray da se sacuva u localstorage
  useEffect(
    function () {
      localStorage.setItem("transaction", JSON.stringify(transactionArray));
      localStorage.setItem("income", JSON.stringify(income));
      localStorage.setItem("expense", JSON.stringify(expense));
    },
    [transactionArray, income, expense]
  );

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
