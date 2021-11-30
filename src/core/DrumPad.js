import { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';

function DrumPad(props) {
 const { keyTrigger, id, url } = props.keyInfo;
 //  const sound = new Audio(url);
 const [selected, setSelected] = useState(false);
 const soundEl = useRef(null);
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
    props.setLastKey(id)
    soundEl.current.play();
   }
  });
 }, []);

 return (
  <div
   style={{ backgroundColor: selected ? 'yellow' : 'red' }}
   id={id}
   onClick={() => {
    props.setLastKey(id);
    changeColor();
    soundEl.current.play();
   }}
   className="drum-pad"
  >
   {keyTrigger}
   <audio ref={soundEl} className="clip" id={keyTrigger} src={url}></audio>
  </div>
 );
}

export default DrumPad;
