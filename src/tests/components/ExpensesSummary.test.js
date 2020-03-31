import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import { ExpensesSummary } from "../../components/ExpensesSummary";

configure({ adapter: new Adapter() });

test("should correctly render expenses summary with one expense", () => {
	const wrapper = shallow(
		<ExpensesSummary expensesCount={1} expensesTotal={235} />
	);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should correctly render expenses summary with multiple expenses", () => {
	const wrapper = shallow(
		<ExpensesSummary expensesCount={23} expensesTotal={28643846384635} />
	);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
