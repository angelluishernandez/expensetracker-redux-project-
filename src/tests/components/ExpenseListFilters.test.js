import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

configure({ adapter: new Adapter() });

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test("should render EditExpenseListFilters correctly", () => {
	expect(wrapper).toMatchSnapshot();
});

test("should render EditExpenseListFilters with alt data correctly", () => {
	wrapper.setProps({ filters: altFilters });
	expect(wrapper).toMatchSnapshot();
});

// test("should handle text change", () => {
// 	const value = "rent";
// 	wrapper.find('input').simulate("change", {
// 		target: { value },
//   });
//   expect(setTextFilter).toHaveBeenLastCalledWith(value)
// });

// test("should sort by date", () => {
//   const value = "date"
//   wrapper.setProps({ filters: altFilters });
//   wrapper.find("Select").simulate("change", {
//     target: {value}
//   })
//   expect(sortByDate).toHaveBeenCalled()
// });

// test("should sort by amount", () => {
//   const value = "amount"
//   wrapper.setProps({ filters: altFilters });
//   wrapper.find("Select").simulate("change", {
//     target: {value}
//   })
//   expect(sortByDate).toHaveBeenCalled()
// });

// test("should handle date changes", () => {
//   const startDate = moment(0).add(4, "years")
//   const endDate = moment(0).add(8, "years")
//   wrapper.find("DateRangePicker").prop("onDatesChange")({startDate, endDate})
//   expect(setStartDate).toHaveBeenLastCalledWith(startDate)
//   expect(setEndDate).toHaveBeenLastCalledWith(endDate)

// });

// test("should handle date focus change", () => {
// 	const calendarFocused = "endDate";
// 	wrapper.find("DateRangePicker").prop("onFocusedChange")(calendarFocused);
// 	expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
// });
