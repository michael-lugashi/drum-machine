import '../styles/settings.css';
import BankSwitch from './BankSwitch';
import DisplayBar from './DisplayBar';
import VolumeBar from './VolumeBar';
import PowerSwitch from './PowerSwitch';
function Settings(props) {
 return (
  <div className="settings">
   settings
   <PowerSwitch power={props.power} setPower={props.setPower} />
   <DisplayBar power={props.power} lastKey={props.lastKey} />
   <VolumeBar volume={props.volume} setVolume={props.setVolume} />
   <BankSwitch setKeys={props.setKeys} />
  </div>
 );
}

export default Settings;
