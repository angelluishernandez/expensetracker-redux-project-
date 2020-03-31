import React from "react";
import { connect } from "react-redux";
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from "../redux/actions/filter";

import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = calendarFocused => {
		this.setState({
			calendarFocused,
		});
	};

	onTextChange = e => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = e => {
		if (e.target.value === "date") {
			this.props.sortByDate();
		} else if (e.target.value === "amount") {
			this.props.sortByAmount();
		}
	};
	render() {
		return (
			<div className="ExpanseListFilters">
				<input type="text" defaultValue={this.props.filters.text} />
				<select value={this.props.filters.sortBy}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates={true}
					startDateId="startDateId"
					endDateId="endDateId"
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.filters,
	};
};

const mapDispatchToProps = dispatch => ({
	setTextFilter: text => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: startDate => dispatch(setStartDate(startDate)),
	setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
