import {combineReducers, createStore} from "redux"
import expensesReducer from "../reducers/expenses.reducer"
import filtersReducer from "../reducers/filters.reducer"

const configStore = () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    })
  );

  return store
}

export default configStore