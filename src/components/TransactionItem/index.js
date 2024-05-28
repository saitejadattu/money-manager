// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachitem, deleteItem} = props
  const {id, title, amount, type} = eachitem
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="text-content">
      <p className="text">{title}</p>
      <p className="text">{amount}</p>
      <p className="text">{type}</p>
      <button
        data-testid="delete"
        className="delete-button"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default TransactionItem
