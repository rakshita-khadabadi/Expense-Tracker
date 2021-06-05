import './ExpenseItem.css';
import  Card from './Card';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) {
  return (
    <Card class="expense-item">
      <ExpenseDate date={props.date}/>
      <div><h2>{props.title}</h2></div>
      <div class = "expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
