import React from "react";
import "./styles/styles.scss";
import "./App.css";
import { Route, Switch, Router } from "react-router";
import ExpenseDashBoard from "./components/ExpenseDashBoard";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import NotFoundPage from "./misc/NotFoundPage";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
import Login from "./components/Login";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

function App() {
	return (
		<Router history={history}>
			<div className="App">
				<Switch>
					<PublicRoute exact path="/" component={Login} />
					<PrivateRoute exact path="/dashboard" component={ExpenseDashBoard} />
					<PrivateRoute exact path="/create" component={AddExpensePage} />
					<PrivateRoute exact path="/edit" component={EditExpensePage} />
					<Route exact path="/edit/:id" component={EditExpensePage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
