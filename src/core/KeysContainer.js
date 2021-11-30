import DrumPad from './DrumPad';
import '../styles/keys.css';

function KeysContainer(props) {
 return (
  <div className="keys-container">
   {props.keys.map((key) => {
    return (
     <DrumPad
      power={props.power}
      volume={props.volume}
      setLastKey={props.setLastKey}
      key={key.id}
      keyInfo={key}
     />
    );
   })}
  </div>
 );
}

export default KeysContainer;
