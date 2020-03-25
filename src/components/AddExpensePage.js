import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../redux/actions/expenses";
const AddExpensePage = props => {
	console.log(props);
	return (
		<div className="AddExpensePage">
			<h1>Add Expense</h1>
			<ExpenseForm
				onSubmit={expense => {
					props.dispatch(addExpense(expense));
					props.history.push("/")
				}}
			/>
		</div>
	);
};

export default connect()(AddExpensePage);
