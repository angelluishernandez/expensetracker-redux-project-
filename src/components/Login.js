import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/auth";

const Login = ({ startLogin }) => (
	<div>
		<label>Username</label>
		<input type="text" placeholder="Username" />
		<label>Password</label>
		<input type="password" placeholder="Password" />
		<button type="submit" onClick={startLogin}>
			Login
		</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});
export default connect(undefined, mapDispatchToProps)(Login);
