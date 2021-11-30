import DrumPad from './DrumPad';
import '../styles/keys.css'

function KeysContainer(props) {
 return (
  <div className='keys-container'>
   {props.keys.map((key) => {
    return <DrumPad setLastKey={props.setLastKey} key={key.id} keyInfo={key} />;
   })}
  </div>
 );
}

export default KeysContainer;
