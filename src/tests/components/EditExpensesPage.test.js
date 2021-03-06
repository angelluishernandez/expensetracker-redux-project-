import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import { EditExpensePage } from "../../components/EditExpensePage";


configure({ adapter: new Adapter() });

let startEditExpense, removeExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			startEditExpense={startEditExpense}
			removeExpense={removeExpense}
			history={history}
			expense={expenses[2]}
		/>
	);
});

test("should render EditExpensePage", () => {
	expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
	wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("should handle remove expense", () => {
	wrapper.find("button").simulate("click");
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
