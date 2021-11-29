import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function DrumPad(props) {
 const { keyTrigger, id, url } = props.keyInfo;
 const sound = new Audio(url);
 const [selected, setSelected] = useState(false);
 const changeColor = () => {
  setSelected(true);
  setTimeout(() => {
   setSelected(false);
  }, 160);
 };

 useEffect(() => {
  document.addEventListener('keyup', (e) => {
   if (e.key.toUpperCase() === keyTrigger.toUpperCase()) {
    changeColor();
    sound.play();
   }
  });
 }, []);

 return (
  <div
   style={{ backgroundColor: selected ? 'yellow' : 'red' }}
   id={id}
   onClick={() => {
    changeColor();
    sound.play();
   }}
   className="drum-pad"
  >
   {keyTrigger}
  </div>
 );
}

export default DrumPad;
