import React from "react";
import ExpenseList from "./ExpenseList";
import ExpanseListFilters from "./ExpenseListFilters";

const ExpenseDashBoard = props => {
	return (
		<div className="ExpenseDashBoard">
			<h1>Expense Dashboard</h1>
			<ExpanseListFilters />
			<ExpenseList />
		</div>
	);
};
export default ExpenseDashBoard;
