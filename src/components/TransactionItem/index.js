// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDelTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <>
      <li className="history-item">
        <p className="head">{title}</p>
        <p className="head">Rs {amount}</p>
        <p className="head">{type}</p>
        <div className="delete-con">
          <button
            type="button"
            onClick={onDelTransaction}
            data-testId="delete"
            className="button1"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              className="img1"
              alt="delete"
            />
          </button>
        </div>
      </li>
      <hr className="rule" />
    </>
  )
}
export default TransactionItem
