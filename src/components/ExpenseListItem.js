import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../redux/actions/expenses";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

export const ExpenseListItem = ({
	description,
	amount,
	createdAt,
	id,
	dispatch,
}) => {
	return (
		<div className="ExpenseListItem">
			<Link to={`/edit/${id}`}>
				<p>{description}</p>
			</Link>
			<p>
				{numeral(amount / 100).format("$0,0.00")} -{" "}
				{moment(createdAt).format("MMMM Do, YYYY")}
			</p>
			<button
				onClick={() => {
					dispatch(removeExpense({ id }));
				}}
			>
				Remove
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		expenses: state.expenses,
	};
};

export default connect(mapStateToProps)(ExpenseListItem);
