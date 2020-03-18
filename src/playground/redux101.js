import { createStore } from "redux";

//Action generators

// The following function works this way. If an object is passed as an argument the default value will be 1.
// If there is no object the argument will be set to an empty object

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT",
	incrementBy,
});

const decrementCount = ({ decrementBy = -1 } = {}) => ({
	type: "DECREMENT",
	decrementBy,
});

const resetCount = () => ({ type: "RESET" });

const setCount = ({ count }) => ({
	type: "SET",
	count,
});

// Reducers
// 1. Reducers are pure functions => output is determined by the input. Only changes what it is the scope of the function.
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.counte + action.incrementBy,
			};
		case "DECREMENT":
			return {
				count: state.count - action.decrementBy,
			};
		case "RESET":
			return {
				count: 0,
			};
		case "SET":
			return {
				count: action.count,
			};
		default:
			return state;
	}
}

const store = createStore(countReducer);

// Subscribe to the store

const unsusbcribe = store.subscribe(() => {
	console.log(store.getState());
});

// store.dispatch({
// 	type: "INCREMENT",
// 	incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
// 	type: "DECREMENT",
// });

store.dispatch(decrementCount());

// store.dispatch({
// 	type: "RESET",
// });

store.dispatch(resetCount());

//Calling an action generator

store.dispatch(incrementCount());

// store.dispatch({
// 	type: "DECREMENT",
// 	decrementBy: 10,
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
// 	type: "SET",
// 	count: 101,
// });

store.dispatch(setCount({ count: 101 }));
console.log(store.getState());
