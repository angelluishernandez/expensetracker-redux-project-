import { combineReducers, createStore } from "redux";
import expensesReducer from "../reducers/expenses.reducer";
import filtersReducer from "../reducers/filters.reducer";

const configStore = () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};

export default configStore;
