import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Router } from "react-router-dom";
// Redux

import configStore from "./redux/store/configStore";
import {addExpense}  from "./redux/actions/expenses";
import { setTextFilter } from "./redux/actions/filter";
import getVisibleExpenses from "./redux/selectors/expenses.selector";

const store = configStore();
store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas Billl" }));
store.dispatch(setTextFilter("gas"))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)


console.log(store.getState());



ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();
