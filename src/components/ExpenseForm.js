import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

const now = moment();

export default class ExpenseForm extends React.Component {
	state = {
		description: this.props.expense ? this.props.expense.description : "",
		note: this.props.expense ? this.props.expense.note : "",
		amount: this.props.expense
			? (this.props.expense.amount / 100).toString()
			: "",
		createdAt: this.props.expense
			? moment(this.props.expense.createdAt)
			: moment(),
		focused: false,
		error: "",
	};

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({
			description,
		}));
	};

	onNoteChange = (e) => {
		e.persist();
		this.setState({
			note: e.target.value,
		});
	};

	onAmountChange = (e) => {
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	onDateChange = (date) => {
		if (date) {
			this.setState({
				createdAt: date,
			});
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState({
			focused,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.description || !this.state.amount) {
			this.setState({
				error: "There is an error in the form ",
			});
		} else {
			this.setState({
				error: "",
			});
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note,
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="number"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.focused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						placeholder="Add a note for your expense (optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button type="submit">Add Expense</button>
				</form>
			</div>
		);
	}
}
