import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [{
    id: 'e1',
    title: 'Toilet Paper',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (wooden)',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
];

const addExpenseHandler = expenses => {
  console.log('In App.js');
  console.log(expenses);

};

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
