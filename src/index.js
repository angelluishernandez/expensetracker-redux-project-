import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Router } from "react-router-dom";
import Destructuring from "./playground/destructuring";

const routes = <BrowserRouter>

</BrowserRouter>;

ReactDOM.render(
	<BrowserRouter>
		<Destructuring />
	</BrowserRouter>,
	document.getElementById("root")
);

serviceWorker.unregister();
