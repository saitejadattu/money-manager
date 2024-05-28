// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {expensesAmount, incomeAmount, balanceAmount} = props

  return (
    <div className="list-div">
      <div className="green-list-item">
        <img
          className="money-image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="ur-balance-container">
          <p className="balance-text">Your Balance</p>
          <p data-testid="balanceAmount" className="your-balance">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="blue-list-item">
        <img
          className="money-image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="ur-balance-container">
          <p className="balance-text">Your Income</p>
          <p data-testid="incomeAmount" className="your-balance">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="voilet-list-item">
        <img
          className="money-image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="ur-balance-container">
          <p className="balance-text">Your Expenses</p>
          <p data-testid="expensesAmount" className="your-balance">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
