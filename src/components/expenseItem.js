import './ExpenseItem.css'
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js';
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div><h2>{props.title}</h2></div>
      <div className = "expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
