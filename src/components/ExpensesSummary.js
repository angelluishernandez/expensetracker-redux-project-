import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../redux/selectors/expenses.selector";
import selectExpensesTotal from "../redux/selectors/expenses-total.selector";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
	const expenseWord = expensesCount === 1 ? "expense" : "expenses";
	const formatedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
	return (
		<div className="ExpensesSummary ">
			<h1>
				Viewing {expensesCount} {expenseWord} totalling {formatedExpensesTotal}
			</h1>
		</div>
	);
};

const mapStateToProps = state => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expensesCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
