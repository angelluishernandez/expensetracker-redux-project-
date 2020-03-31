import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from "enzyme-to-json"
import { shallow } from "enzyme";
import React from "react";
import Header from "../../misc/Header";

configure({ adapter: new Adapter() });

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot()
  

	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
	// console.log(renderer.getRenderOutput());
});
