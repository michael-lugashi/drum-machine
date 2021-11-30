import '../styles/settings.css'
import BankSwitch from './BankSwitch';

function Settings(props) {
 return (
  <div className='settings'>
      Settings
      Display
      <BankSwitch setKeys={props.setKeys}/>
  </div>
 );
}

export default Settings;