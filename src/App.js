import './styles/App.css';
import bankOne from './model/BankOne';
import { useEffect, useState } from 'react';
import KeysContainer from './core/KeysContainer';
import Settings from './core/Settings';

function App() {
 const [keys, setKeys] = useState(bankOne);
 const [lastKey, setLastKey] = useState('')
//  useEffect(() => {
//   setKeys(bankOne);
//  }, []);
 return (
  <div className="app" id="display">
   <KeysContainer keys={keys} setLastKey={setLastKey}/>
   <Settings lastKey={lastKey} setKeys={setKeys}/>
  </div>
 );
}

export default App;
