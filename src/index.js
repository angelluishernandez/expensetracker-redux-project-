import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App, { history } from "./App";

// Redux

import configStore from "./redux/store/configStore";
import { startSetExpenses } from "./redux/actions/expenses";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./redux/actions/auth";
import LoadingPage from "./components/LoadingPage";

const store = configStore();

console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

let hasRendered = false;

const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById("root"));
		hasRendered = true;
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === "/") {
				history.push("/dashboard");
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push("/");
	}
});
