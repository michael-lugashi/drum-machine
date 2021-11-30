import { useEffect, useState } from 'react';
import bankOne from '../model/BankOne';
import bankTwo from '../model/BankTwo';

function BankSwitch(props) {
 const [isBankOne, setIsBankOne] = useState(true);
 useEffect(() => {
  props.setKeys(isBankOne ? bankOne : bankTwo);
 }, [isBankOne, props]);

 return (
  <div>
   <h3 className="header">Bank {isBankOne ? 'One' : 'Two'}</h3>
   <div
    className="switch"
    style={{ justifyContent: isBankOne ? 'flex-start' : 'flex-end' }}
    onClick={() => {
     setIsBankOne(!isBankOne);
    }}
   >
    <div className="knob" />
   </div>
  </div>
 );
}

export default BankSwitch;
