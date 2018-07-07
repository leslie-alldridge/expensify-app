import React from 'react';
import  {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () => (
    <div>This is from my dashboard component</div>
);

const AddExpensePage = () => (
    <div>This is from my add expense component</div>
);

const EditExpensePage = () => (
    <div>This is from my edit expense component</div>
);

const HelpPage = () => (
    <div>This is from my help component</div>
);

const NotFoundPage = () => (
    <div>
    Error 404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter