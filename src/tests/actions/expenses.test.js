import {
	addExpense,
	editExpense,
	removeExpense,
} from "../../redux/actions/expenses";

// We cannot use toBe because {} === {} && [] === [] => FALSY

test("Should setup remove expense action object", () => {
	const action = removeExpense({ id: "123" });
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123",
	});
});

test("Should edit expense action object", () => {
	const action = editExpense("123", { note: "update" });
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "123",
		updates: { note: "update" },
	});
});

test("Should setup add expense action object with provided values", () => {
	const data = {
		description: "Rent",
		amount: 123,
		createdAt: 1000,
		note: "This was last month rent",
	};
	const action = addExpense(data);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...data,
			id: expect.any(String),
		},
	});
});

test("Should setup add expense action object with default values", () => {
	const action = addExpense();

	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			id: expect.any(String),
			description: "",
			note: "",
			amount: 0,
			createdAt: 0,
		},
	});
});
