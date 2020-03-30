import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate,
} from "../../redux/actions/filter";
import moment from "moment";

test("should generate set start date action object", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate: moment(0),
	});
});

test("should generate set end date action object", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate: moment(0),
	});
});

test("should set filter by amount", () => {
	expect(sortByAmount()).toEqual({
		type: "SORT_BY_AMOUNT",
	});
});

test("should set filter by date", () => {
	expect(sortByDate()).toEqual({
		type: "SORT_BY_DATE",
	});
});

test("should set filter by text with default value", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "",
	});
});

test("should set filter by text with passed value", () => {
	const action = setTextFilter("Rent");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "Rent",
	});
});
