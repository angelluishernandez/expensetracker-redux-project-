import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "../../components/Login";

configure({ adapter: new Adapter() });

test("should render Login", () => {
	const wrapper = shallow(<Login />);
	expect(wrapper).toMatchSnapshot();
});

test("should call startlogOut on button click", () => {
	const startLogin = jest.fn();

	const wrapper = shallow(<Login startLogin={startLogin} />);
	wrapper.find("button").simulate("click");
	expect(startLogin).toHaveBeenCalled();
});
