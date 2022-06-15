import Expenses from "./components/Expenses/Expenses";

function App() {
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
]
  return (
    <div>
        <h2> Let-s get started!</h2>
        <p>This is also visible!</p>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
