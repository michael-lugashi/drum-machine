import './styles/App.css';
import bankOne from './model/BankOne';
// import bankTwo from './model/BankTwo';
import { useEffect, useState } from 'react';
import KeysContainer from './core/KeysContainer';
import Settings from './core/Settings';

function App() {
 const [keys, setKeys] = useState(bankOne);
//  useEffect(() => {
//   setKeys(bankOne);
//  }, []);
 return (
  <div className="app" id="display">
   <KeysContainer keys={keys} />
   <Settings setKeys={setKeys}/>
  </div>
 );
}

export default App;
