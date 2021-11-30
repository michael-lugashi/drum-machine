function PowerSwitch(props) {
 return (
  <div>
   <h3 className="header">Power {props.power? 'On' : 'Off'}</h3>
   <div
    className="switch"
    style={{ justifyContent: props.power ? 'flex-start' : 'flex-end' }}
    onClick={() => {
     props.setPower(!props.power);
    }}
   >
    <div className="knob" />
   </div>
  </div>
 );
}

export default PowerSwitch;