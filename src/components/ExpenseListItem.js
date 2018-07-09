import React from 'react';
import { Link } from 'react-router-dom';


// export a stateless function component
//description, amount, createdAt

const ExpenseListItem = ({ id, description, amount, createAt}) => (
    <div> 
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createAt}</p>
    </div>
);

export default ExpenseListItem;
