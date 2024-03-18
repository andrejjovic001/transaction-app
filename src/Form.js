import { useState } from "react";

export default function Form({ onAddTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    if (!text || !amount) {
      setMessage("Both fields are required.");
      return;
    }

    if (isNaN(Number(amount))) {
      setMessage("Please enter a valid number for the amount.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount),
    };

    onAddTransaction(newTransaction);

    setText("");
    setAmount("");
    setMessage("");
  }

  return (
    <div className="form">
      <h2>Add new transaction</h2>
      <div className="under-line"></div>

      <form onSubmit={onSubmit}>
        <div className="form-inf">
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>

        <div className="form-inf">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
          <p className="info-message">{message}</p>
        </div>

        <button>Add transaction</button>
      </form>
    </div>
  );
}
