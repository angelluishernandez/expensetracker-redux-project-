import React from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpensePage = props => {
	console.log(props);
	return (
		<div className="AddExpensePage">
			<h1>Add Expense</h1>
			<ExpenseForm />
		</div>
	);
};

export default AddExpensePage;
