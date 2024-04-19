import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    var { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("Budget cannot exceed 20,000.");
            setNewBudget(20000);
            budget = 20000; // for some reason I have to keep updating budget manually prolly due to async comms
        }
        else if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than spending.");
            setNewBudget(totalExpenses);
            budget = totalExpenses;
        }
        else {
            setNewBudget(event.target.value);
            budget = event.target.value;
        }
        // dispatch the set budget even so the UI updates
        dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
