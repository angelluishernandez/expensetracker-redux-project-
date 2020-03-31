import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import { ExpenseListItem } from "../../components/ExpenseListItem";

configure({ adapter: new Adapter() });

test("should render ExpenseListItem correctly", () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});


