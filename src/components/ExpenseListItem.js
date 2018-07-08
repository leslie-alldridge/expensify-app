import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// export a stateless function component
//description, amount, createdAt

const ExpenseListItem = ({dispatch, id, description, amount, createAt}) => (
    <div> 
        <h3>{description}</h3>
        <p>{amount} - {createAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);
