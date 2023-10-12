import Header from "./components/Header.jsx";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses.jsx";
import './App.css'
import TransactionList from "./components/TransactionList.jsx";
import AddTransaction from "./components/AddTransaction.jsx";

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      <p class="credit">© {year} All Rights Reserved. Made with ❤️ by Hamza Malik
      </p>
    </div>
  );
}

export default App;
