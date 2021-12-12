import Expenses from './components/Expenses/Expenses';
import './App.css';

function App() {
    const expenses = [
        {id:'g1', title:'Seguro do carro', amount:2000, quando:new Date(2021, 2, 31)},
        {id:'g2', title:'Plano de saúde', amount:3000, quando:new Date(2021, 2, 16)},
        {id:'g3', title:'Escola', amount:4000, quando:new Date(2021, 2, 20)},
    ];
    return (
        <div>
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
