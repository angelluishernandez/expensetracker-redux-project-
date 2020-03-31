import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";

configure({ adapter: new Adapter() });

test("should render ExpenseList with expenses", () => {
	const wrapper = shallow(<ExpenseList expenses={expenses} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render Expense list with empty message", () => {
	const wrapper = shallow(<ExpenseList expenses={[]} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
