// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import './components/Expenses.css';

function App(props) {
 
  //console.log(expenses.length , 'exp len');
  return (
    <div>
      <Expenses class='expenses'/>
      </div>
  );
}

export default App;
