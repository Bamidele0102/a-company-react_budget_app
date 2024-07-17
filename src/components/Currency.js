import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'
        style={{
          backgroundColor:`rgba(96, 244, 110, 0.8)`
      }}
      > Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}
      style={{
        backgroundColor:`rgba(255, 255, 255, 0.38)`
    }}
      >

        <option className="currencyOption" value="£">£ Pound</option>
        <option className="currencyOption" value="₹">₹ Ruppee</option>
        <option className="currencyOption" value="€">€ Euro</option>
        <option className="currencyOption" value="$">$ Dollar</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;
