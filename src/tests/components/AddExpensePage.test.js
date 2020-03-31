import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";
import moment from "moment";

configure({ adapter: new Adapter() });

let onSubmit, history, wrapper;
beforeEach(() => {
	onSubmit = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test("should render AddExpensePage correctly", () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle onSubmit", () => {
	wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith("/");
	expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
});
