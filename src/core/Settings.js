import '../styles/settings.css';
import BankSwitch from './BankSwitch';
import DisplayBar from './DisplayBar';

function Settings(props) {
 return (
  <div className="settings">
   settings
   <DisplayBar lastKey={props.lastKey}/>
   <BankSwitch setKeys={props.setKeys} />
  </div>
 );
}

export default Settings;
