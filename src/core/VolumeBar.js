function VolumeBar(props) {
 return (
  <input className='volume-bar'
   type="range"
   value={props.volume * 100}
   onInput={(e) => {
    props.setVolume(e.target.value / 100);
   }}
  />
 );
}

export default VolumeBar;
