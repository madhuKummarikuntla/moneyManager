// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props
  return (
    <ul className="money-cards">
      <li className="your-bal-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="balance">
          <p className="desc">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            RS {balance}
          </p>
        </div>
      </li>
      <li className="your-income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="balance">
          <p className="desc">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </li>
      <li className="your-expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="balance">
          <p className="desc">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            RS {expense}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
