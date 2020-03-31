import React from "react";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import Adapter from "enzyme-adapter-react-16";
import toJSON from "enzyme-to-json";
import ExpenseDashboard from "../../components/ExpenseDashBoard"


configure({ adapter: new Adapter() });

test("should render NotFoundPage correctly", () => {
	const wrapper = shallow(<ExpenseDashboard />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
