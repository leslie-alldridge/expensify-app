import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
// store set up
export default () => {

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        })
    );
    return store;
};


