import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

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
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    amountList: [],
  }
  onFormSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const typeChange = transactionTypeOptions.filter(
      each => each.optionId === type,
    )
    const newList = {
      id: uuidv4(),
      title: title,
      amount: parseInt(amount),
      type: typeChange[0].displayText,
    }
    // console.log(newList)
    this.setState(prevState => ({
      amountList: [...prevState.amountList, newList],
      title: '',
      amount: '',
    }))
  }

  onTitleInput = event => {
    this.setState({title: event.target.value})
  }
  onAmountInput = event => {
    this.setState({
      amount: event.target.value,
    })
  }
  onChangeOption = event => {
    this.setState({type: event.target.value})
  }
  onDelete = id => {
    const {amountList} = this.state
    this.setState({amountList: amountList.filter(each => each.id !== id)})
  }
  getYourIncome = () => {
    const {amountList} = this.state
    let income = 0
    amountList.filter(eachitem => {
      if (eachitem.type.toLowerCase() === 'income') {
        income += eachitem.amount
      }
    })
    return income
  }
  getYourExpenss = () => {
    const {amountList} = this.state
    let expenses = 0
    amountList.filter(each => {
      if (each.type.toLowerCase() === 'expenses') {
        expenses += each.amount
      }
    })
    return expenses
  }
  getbalanceAmount = () => {
    const {amountList} = this.state
    let income = 0
    let expenses = 0
    let yourBalance = 0
    amountList.filter(each => {
      if (each.type.toLowerCase() === 'income') {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    yourBalance = income - expenses
    return yourBalance
  }
  render() {
    const {title, amount, type, amountList} = this.state
    const incomeAmount = this.getYourIncome()
    const expensesAmount = this.getYourExpenss()
    const balanceAmount = this.getbalanceAmount()
    return (
      <div className="bg-container">
        <div className="ac-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="greeting">
            Welcome back to your
            <a className="MoneyManager-text">Money Manager</a>
          </p>
        </div>
        <div>
          <ul className="div-orderd-list">
            {
              <MoneyDetails
                incomeAmount={incomeAmount}
                expensesAmount={expensesAmount}
                balanceAmount={balanceAmount}
              />
            }
          </ul>
        </div>
        <div className="transaction-history">
          <form onSubmit={this.onFormSubmit} className="form-container">
            <h1 className="heading-add">Add Transaction</h1>
            <div>
              <label className="para-form" htmlFor="title">
                TITLE
              </label>
            </div>
            <div>
              <input
                className="title-input"
                id="title"
                value={title}
                placeholder="TITLE"
                onChange={this.onTitleInput}
              />
            </div>
            <div>
              <label className="para-form" htmlFor="amount">
                AMOUNT
              </label>
            </div>
            <div>
              <input
                className="amount-input"
                id="amount"
                value={amount}
                placeholder="AMOUNT"
                onChange={this.onAmountInput}
              />
            </div>
            <div>
              <label className="para-form" htmlFor="type">
                TYPE
              </label>
            </div>
            <select
              className="para-form"
              id="type"
              value={type}
              onChange={this.onChangeOption}
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <div>
              <button type="submit" className="form-button">
                Add
              </button>
            </div>
          </form>
          <div className="transaction-item-container">
            <h1 className="history-text">History</h1>
            <div className="unOrderd-container">
              <ul className="un-orderd-list-ul">
                <li className="text-content">
                  <p className="text">Title</p>
                  <p className="text">Amount</p>
                  <p className="text">Type</p>
                </li>
                {amountList.map(eachitem => (
                  <TransactionItem
                    key={eachitem.id}
                    eachitem={eachitem}
                    deleteItem={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
