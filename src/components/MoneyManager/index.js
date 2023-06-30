import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionsList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  delTransaction = id => {
    const {transactionsList} = this.state
    const delTransactions = transactionsList.filter(each => each.id !== id)
    this.setState({transactionsList: delTransactions})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      amount: parseInt(amountInput),
      title: titleInput,
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      amountInput: '',
      titleInput: '',
      optionId: transactionTypeOptions[0].displayText,
    }))
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getAmount = () => {
    const {transactionsList} = this.state

    let expensesAmount = 0
    let incomeAmount = 0
    let balanceAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {transactionsList, titleInput, amountInput} = this.state
    const expense = this.getExpenses()
    const income = this.getIncome()
    const balance = this.getAmount()
    return (
      <div className="app-con">
        <div className="card-con">
          <div className="welcome-card">
            <h1 className="head">Hi, Richard</h1>
            <p className="des">
              Welcome back to your
              <span className="sub-des"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails expense={expense} income={income} balance={balance} />

          <div className="lower-con">
            <form className="input-fields" onSubmit={this.onAddTransaction}>
              <h1 className="head">Add Transaction</h1>
              <label htmlFor="title" className="title">
                Title
              </label>
              <input
                type="text"
                className="title1"
                value={titleInput}
                placeholder="Title"
                onChange={this.onChangeTitle}
                id="title"
              />
              <label htmlFor="amount" className="title">
                Amount
              </label>
              <input
                type="text"
                value={amountInput}
                className="title1"
                placeholder="Amount"
                onChange={this.onChangeAmount}
                id="amount"
              />
              <label className="title" htmlFor="select">
                Type
              </label>
              <select
                className="option"
                id="select"
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button-sub">
                Add
              </button>
            </form>
            <div className="his-con">
              <h1 className="head">History</h1>
              <div className="details-con">
                <ul className="items-con">
                  <li className="table-header">
                    <p className="header">Title</p>
                    <p className="header">Amount</p>
                    <p className="header">Type</p>
                  </li>
                  <hr />
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      deleteTransaction={this.delTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
