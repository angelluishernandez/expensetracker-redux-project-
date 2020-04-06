import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Router } from "react-router-dom";
import { AdminInfo } from "./playground/hoc";
// Redux

import configStore from "./redux/store/configStore";
import { startSetExpenses } from "./redux/actions/expenses";
import { setTextFilter } from "./redux/actions/filter";
import getVisibleExpenses from "./redux/selectors/expenses.selector";

const store = configStore();
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById("root"));
});

serviceWorker.unregister();
