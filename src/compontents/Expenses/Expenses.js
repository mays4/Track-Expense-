import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
 const Expenses=(props)=> {
  return (
    <Card  className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        price={props.items[1].price}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses