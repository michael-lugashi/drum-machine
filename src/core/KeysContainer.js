import DrumPad from './DrumPad';

function KeysContainer(props) {
 return (
  <div>
   {props.keys.map((key) => {
    return <DrumPad key={key.id} keyInfo={key} />;
   })}
  </div>
 );
}

export default KeysContainer;
