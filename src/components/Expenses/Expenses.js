import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses(props) {
    const gastos = props.expenses;
    return (
        <Card className='expenses'>
            <ExpenseItem title={gastos[0].title} amount={gastos[0].amount} quando={gastos[0].quando} />
            <ExpenseItem title={gastos[1].title} amount={gastos[1].amount} quando={gastos[1].quando} />
            <ExpenseItem title={gastos[2].title} amount={gastos[2].amount} quando={gastos[2].quando} />
        </Card>
    );
}

export default Expenses;