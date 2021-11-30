import './styles/App.css';
import bankOne from './model/BankOne';
import { useEffect, useState } from 'react';
import KeysContainer from './core/KeysContainer';
import Settings from './core/Settings';

function App() {
 const [keys, setKeys] = useState(bankOne);
 const [lastKey, setLastKey] = useState('');
 const [volume, setVolume] = useState(0.3);
 const [power, setPower] = useState(true);
 //  useEffect(() => {
 //   setKeys(bankOne);
 //  }, []);
 return (
  <div className="app" id="display">
   <KeysContainer
    power={power}
    volume={volume}
    keys={keys}
    setLastKey={setLastKey}
   />
   <Settings
    setLastKey={setLastKey}
    setPower={setPower}
    power={power}
    volume={volume}
    setVolume={setVolume}
    lastKey={lastKey}
    setKeys={setKeys}
   />
  </div>
 );
}

export default App;
