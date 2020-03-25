import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../redux/actions/expenses";

const EditExpensePage = props => {
	console.log(props.expense);
	return (
		<div className="EditExpensePage">
			<ExpenseForm
				onSubmit={expense => {
					props.dispatch(editExpense(props.expense.id, expense));
					props.history.push("/");
				}}
				expense={props.expense}
			/>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(
			expense => expense.id === props.match.params.id
		),
	};
};

export default connect(mapStateToProps)(EditExpensePage);
