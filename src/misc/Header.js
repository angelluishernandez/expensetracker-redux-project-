import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
	<header>
		<h1>Expense tracker</h1>

		<NavLink to="/" activeClassName="is-active">
			Dashboard
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create expense
		</NavLink>
		<NavLink to="/edit" activeClassName="is-active">
			Edit a Expense
		</NavLink>
	
	</header>
);

export default Header;
