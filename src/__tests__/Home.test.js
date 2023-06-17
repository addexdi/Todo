import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Home from "../pages/Home";

Enzyme.configure({ adapter: new Adapter() });

const simulateChangeOnInput = function (
  wrapper,
  inputSelector,
  newValue
) {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue },
  });
  return wrapper.find(inputSelector);
};

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders home component without crashing", () => {
    expect(wrapper.exists());
  });

  it("has default lists", () => {
    expect(
      wrapper.find(".list--type List")
    ).toHaveLength(4);
  });

  it("render added lists", () => {
    expect(
      wrapper.find(".added--task List")
    ).toHaveLength(0);
  });
});
