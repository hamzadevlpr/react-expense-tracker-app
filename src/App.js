import Header from "./components/Header.jsx";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses.jsx";
import './App.css'
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
