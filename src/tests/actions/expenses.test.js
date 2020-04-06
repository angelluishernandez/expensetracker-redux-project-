import {
	addExpense,
	startAddExpense,
	editExpense,
	removeExpense,
	setExpenses,
	startSetExpenses,
	startRemoveExpense,
	startEditExpense,
} from "../../redux/actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import expensesReducer from "../../redux/reducers/expenses.reducer";
const createMockStore = configureMockStore([thunk]);

// We cannot use toBe because {} === {} && [] === [] => FALSY

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = {
			description,
			note,
			amount,
			createdAt,
		};
	});
	database
		.ref("expenses")
		.set(expensesData)
		.then(() => done());
});

test("Should setup remove expense action object", () => {
	const action = removeExpense({ id: "123" });
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123",
	});
});

test("should remove expense from firebase", (done	)=> {
	const store = createMockStore({})
	const id = expenses[2].id
	store.dispatch(startRemoveExpense({id})).then(()=> {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "REMOVE_EXPENSE", 
			id
		})
		return database.ref(`expenses/${id}`).once("value")
	}).then((snapshot)=> {
		expect(snapshot.val()).toBeFalsy()
		done()
	})
})





test("Should edit expense action object", () => {
	const action = editExpense("123", { note: "update" });
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "123",
		updates: { note: "update" },
	});
});

test("should edit expense from firebase", (done)=> {
	const store = createMockStore({})
	const id = expenses[0].id
	const updates ={
		amount: 210.45
	}
	store.dispatch(startEditExpense(id, updates)).then(()=> {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "EDIT_EXPENSE", 
			id, 
			updates
		})
		return database.ref(`expenses/${id}`).once("value").then((snapshot)=> {
			expect(snapshot.val().amount).toBe(updates.amount)
			done()
		})
	})


	})

test("Should setup add expense action object with provided values", () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: expenses[2],
	});
});

test("Should setup set expenses action object with data", () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: "SET_EXPENSES",
		expenses,
	});
});

test("should set up expenses ", () => {
	const action = {
		type: "SET_EXPENSES",
		expenses: [expenses[1]],
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});

test("should fetch the expenses from firebase ", (done) => {
	const store = createMockStore({});
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "SET_EXPENSES",
			expenses,
		});
		done()
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
