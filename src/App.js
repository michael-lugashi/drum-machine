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

 const handleKeyPress = (keys) => {
  document.removeEventListener('keydown', keyPress);
  document.addEventListener('keydown', keyPress);
  function keyPress(e) {
   for (const { keyTrigger, id } of keys) {
       console.log(id)
    if (e.key.toUpperCase() === keyTrigger.toUpperCase()) {
     document.getElementById(id).click();
    }
   }
  }
 };
 
  useEffect(() => {
   handleKeyPress(keys)
  }, [keys]);

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
