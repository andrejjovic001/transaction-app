export default function Balance({ income, expense, onReset }) {
  const totalBalance = income - Math.abs(expense);

  return (
    <div className="balance">
      <div className="balance-total">
        <div>
          <h4>Your balance:</h4>
          <h3>${totalBalance.toFixed(2)}</h3>
        </div>

        <div>
          <button className="reset-btn" onClick={onReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="balance-inf">
        <h2>
          Income <br />
          <span className="green">{income}</span>
        </h2>

        <div className="line"></div>
        <h2>
          Expense <br /> <span className="red">{Math.abs(expense)}</span>
        </h2>
      </div>
    </div>
  );
}
