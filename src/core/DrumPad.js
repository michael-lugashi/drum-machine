import { useState, useRef } from 'react';

function DrumPad(props) {
 const { keyTrigger, id, url } = props.keyInfo;
 const [selected, setSelected] = useState(false); //works with power on
 const [pressed, setPressed] = useState(false); // works with power off
 const soundEl = useRef(null);

 const press = () => {
  setPressed(true);
  setTimeout(() => {
   setPressed(false);
  }, 160);
 };

 const changeColor = () => {
  setSelected(true);
  setTimeout(() => {
   setSelected(false);
  }, 160);
 };

 return (
  <div
   style={{
    backgroundColor: selected ? 'rgb(255, 215, 0)' : 'rgb(133, 133, 133)',
    boxShadow: pressed ? '0 0 0 #000000' : '.2vw .2vw .2vw #000000',
   }}
   id={keyTrigger}
   onClick={() => {
    press();
    if (props.power) {
     soundEl.current.volume = props.volume;
     changeColor();
     soundEl.current.play();
     props.setLastKey(id);
    }
   }}
   className="drum-pad"
  >
   {keyTrigger}
   <audio ref={soundEl} className="clip" id={keyTrigger} src={url}></audio>
  </div>
 );
}

export default DrumPad;
