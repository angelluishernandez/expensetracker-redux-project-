import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/auth";

const Login = ({ startLogin }) => {
	return (
		<div className="box-layout">
			<div className="box-layout__box">
				<h1 className="box-layout__title">Expensify</h1>
				<p>*** Expense tracker ***</p>
				<button type="submit" onClick={startLogin} className="button">
					Login with Google{" "}
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});
export default connect(undefined, mapDispatchToProps)(Login);
