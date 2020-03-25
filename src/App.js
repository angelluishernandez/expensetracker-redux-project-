import React from "react";
import "./styles/styles.scss";
import "./App.css";
import { Route, Switch } from "react-router";
import ExpenseDashBoard from "./components/ExpenseDashBoard";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./misc/NotFoundPage";
import Header from "./misc/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={ExpenseDashBoard} />
				<Route exact path="/create" component={AddExpensePage} />
				<Route exact path="/edit" component={EditExpensePage} />
				<Route exact path="/help" component={HelpPage} />
				<Route exact path="/edit/:id" component={EditExpensePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	);
}

export default App;
