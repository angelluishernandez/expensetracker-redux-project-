import filtersReducer from "../../redux/reducers/filters.reducer";
import moment from "moment";

test("should setup default filter values", () => {
	const state = filtersReducer(undefined, { type: "@@INIT" });

	expect(state).toEqual({
		text: "",
		sortBy: "date",
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
	});
});

test("should set sortBy to amount", () => {
	const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
	expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
	const currentState = {
		text: "",
		startDate: undefined,
		endDate: undefined,
		sortBy: "amount",
	};

	const action = { type: "SORT_BY_DATE" };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
	const action = { type: "SET_TEXT_FILTER", text: "some text" };
	const state = filtersReducer(undefined, action);
	expect(state.text).toBe("some text");
});

test("should set startdatefilter", () => {
	const startDate = moment();
	const action = { type: "SET_START_DATE", startDate };
	const state = filtersReducer(undefined, action);
	expect(state.startDate).toEqual(startDate);
});

test("should set endDate filter", () => {
	const endDate = moment();
	const action = { type: "SET_END_DATE", endDate };
	const state = filtersReducer(undefined, action);
	expect(state.endDate).toEqual(endDate);
});
