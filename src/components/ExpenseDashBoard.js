import React from "react";
import ExpenseList from "./ExpenseList";
import ExpanseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashBoard = props => {
	return (
		<div className="ExpenseDashBoard">
			<h1>Expense Dashboard</h1>
			<ExpanseListFilters />
			<ExpensesSummary />
			<ExpenseList />
		</div>
	);
};
export default ExpenseDashBoard;
