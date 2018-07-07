import { createStore, combineReducers } from 'redux';

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};  

//filters reducer 
const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date', 
    startDate: undefined, 
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

//store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'test',
        description: 'Jan rent',
        notes: 'This was the final payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};