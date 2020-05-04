import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App, { history } from "./App";

// Redux

import configStore from "./redux/store/configStore";
import { startSetExpenses } from "./redux/actions/expenses";
import { firebase } from "./firebase/firebase";

const store = configStore();

console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(startSetExpenses()).then(() => {
			ReactDOM.render(jsx, document.getElementById("root"));
		});
	} else {
		history.push("/");
	}
});
