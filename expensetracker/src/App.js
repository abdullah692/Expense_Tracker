import logo from './logo.svg';
import './App.css';
import Tracker from './Tracker';
import  {TransactionProvider}  from './transContext'; 
function App() {
  return (
    <div className="App">
      <TransactionProvider>
     <Tracker/> 
     </TransactionProvider>
    </div>
  );
}

export default App;
