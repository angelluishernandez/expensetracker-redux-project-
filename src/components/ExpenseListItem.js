import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../redux/actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
	return (
		<div className="ExpenseListItem">
			<p>{description}</p>
			<p>
				${amount} - {createdAt}
			</p>
			<button
				onClick={() => {
					dispatch(removeExpense({id}));
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
