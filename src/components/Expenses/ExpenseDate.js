import './ExpenseDate.css';

function ExpenseDate(props) {
    const mes = props.quando.toLocaleString('pt-BR', { month:'long' });
    const dia = props.quando.toLocaleString('pt-BR', { day:'2-digit' });
    const ano = props.quando.getFullYear();

    return(
        <div className="expense-date">
            <div className="expense-date__month">{mes}</div>
            <div className="expense-date__day">{dia}</div>
            <div className="expense-date__year">{ano}</div>
        </div>
    );
};

export default ExpenseDate;