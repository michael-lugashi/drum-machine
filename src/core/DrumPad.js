function DrumPad(props) {
 const { keyCode, keyTrigger, id, url } = props.keyInfo;
 return (
  <div className="drum-pad">
   {console.log(keyCode)}
   {console.log(keyTrigger)}
   {console.log(id)}
   {console.log(url)}
  </div>
 );
}

export default DrumPad;
