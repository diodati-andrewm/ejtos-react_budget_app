import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { remaining } = useContext(AppContext);
    const { totalExpenses } = useContext(AppContext)
    const [newBudget, setNewBudget] = useState(budget);
    const [newRemaining, setNewRemaining] = useState(remaining)
    const [newTotalExpenses, setNewTotalExpenses] = useState(totalExpenses);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000) {
            alert("Budget cannot exceed 20,000");
            setNewBudget(20000);
            //setNewRemaining(newBudget - newTotalExpenses);
        }
        else if(event.target.value < newRemaining) {
            alert("You cannot reduce the budget value lower than spending.");
            setNewBudget(newRemaining);
            //setNewRemaining(newBudget - newTotalExpenses);
        }
        else {
            setNewBudget(event.target.value);
            //setNewRemaining(newBudget - newTotalExpenses);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
