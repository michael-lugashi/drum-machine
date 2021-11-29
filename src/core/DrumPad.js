function DrumPad(props) {
 const { keyCode, keyTrigger, id, url } = props.keyInfo;
 return (
  <div className="drum-pad">
   {console.log(keyCode)}
   {console.log(id)}
   {console.log(url)}
   {keyTrigger}
  </div>
 );
}

export default DrumPad;
