import moment from "moment";
import selectExpenses from "../../redux/selectors/expenses.selector";
import expenses from "../fixtures/expenses"


test("should filter by text value", () => {
	const filters = {
		text: "e",
		sortBy: "date",
		startDate: undefined,
		endDate: undefined,
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by statDate", () => {
	const filters = {
		text: "",
		sortBy: "date",
		startDate: moment(0),
		endDate: undefined,
	};

	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
});


/// Should filter by endDate 

test("should sort by endDate", () => {
  const filters ={
    text: "", 
    sortBy: "date", 
    startDate: undefined, 
    endDate: moment(0)
  }

  const results = selectExpenses(expenses, filters)
  expect(results).toEqual([expenses[0], expenses[1]])
})


// SHould sort by date

test("should sort by date", ()=> {
  const filters ={
    text: "", 
    sortBy: "date", 
    startDate: undefined, 
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

// SHoudl sort by amount
test("should sort by amount", ()=> {
  const filters ={
    text: "", 
    sortBy: "amount", 
    startDate: undefined, 
    endDate: undefined
  }
  const results = selectExpenses(expenses, filters)
  expect(results).toEqual([expenses[1], expenses[2], expenses[0]])
})
