import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    var { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        currency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    return (
        <select className="custom-select bg-success" id="currency" onChange={handleCurrencyChange}>
            <option defaultValue value="$" name="usd">$ Dollar</option>
            <option value="£" name="gbp">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="rupee">₹ Rupee</option>
        </select>
    );
};
export default Currency;