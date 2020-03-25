import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses.selector";

const ExpenseList = props => (
	<div className="ExpenseList">
		<h1>Expense List</h1>
		{props.expenses.map((expense, index) => {
			return <ExpenseListItem key={index} {...expense} />;
		})}
	</div>
);

// Best way to do it

const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpenseList);

// Simple way to do it

// const ConnectedExpenseList = connect((state)=> {
//   return {
//     expenses: state.expenses,

//   }
// })(ExpenseList )
// export default ConnectedExpenseList;
