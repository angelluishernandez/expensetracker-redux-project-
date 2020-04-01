import {
	addExpense,
	startAddExpense,
	editExpense,
	removeExpense,
} from "../../redux/actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
const createMockStore = configureMockStore([thunk]);

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
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: expenses[2],
	});
});

// test("should add expense to database and store", () => {
// 	const store = createMockStore({});
// 	const expenseData = {
// 		description: "Mouse",
// 		amount: 300,
// 		note: "This on is better",
// 		createdAt: 1000,
// 	};
// 	store
// 		.dispatch(startAddExpense(expenseData))
// 		.then(() => {
// 			const actions = store.getActions();
// 			expect(actions[0]).toEqual({
// 				type: "ADD_EXPENSE",
// 				expense: {
// 					id: expect.any(String),
// 					...expenseData,
// 				},
// 			});
// 			return database.ref(`expenses/${actions[0].expense.id}`).once("value");
// 		})
// 		.then(snapshot => {
// 			expect(snapshot.val()).toEqual(expenseData);
// 			done();
// 		});
// });

// test("Should setup add expense action object with default values", (done) => {
// 	const store = createMockStore({});
// 	const expenseDefault = {
// 		description: "",
// 		amount: 0,
// 		note: "",
// 		createdAt: 0,
// 	};
// 	store
// 		.dispatch(startAddExpense({}))
// 		.then(() => {
// 			const actions = store.getActions();
// 			expect(actions[0]).toEqual({
// 				type: "ADD_EXPENSE",
// 				expense: {
// 					id: expect.any(String),
// 					...expenseDefault,
// 				},
// 			});
// 			return database.ref(`expenses/${actions[0].expense.id}`).once("value");
// 		})
// 		.then(snapshot => {
// 			expect(snapshot.val()).toEqual(expenseDefault);
// 			done();
// 		});
// });
