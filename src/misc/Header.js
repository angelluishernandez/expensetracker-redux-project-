import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../redux/actions/auth";

const Header = ({ startLogout }) => (
	<header>
		<h1>Expense tracker</h1>

		<NavLink to="/dashboard" activeClassName="is-active">
			Dashboard
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create expense
		</NavLink>
		<NavLink to="/edit" activeClassName="is-active">
			Edit a Expense
		</NavLink>
		<button onClick={startLogout}>Logout</button>
	</header>
);

const mapDistpatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDistpatchToProps)(Header);
