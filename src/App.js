import './styles/App.css';
import bankOne from './model/BankOne';
// import bankTwo from './model/BankTwo';
import KeysContainer from './core/KeysContainer';
import { useEffect, useState } from 'react';

function App() {
 const [keys, setKeys] = useState([]);
 useEffect(() => {
  setKeys(bankOne);
 }, []);
 return (
  <div className="app" id="display">
   <KeysContainer keys={keys} />
  </div>
 );
}

export default App;
