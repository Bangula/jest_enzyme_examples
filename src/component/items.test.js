import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

import Items from "./Items";
import { wrap } from "module";

configure({ adapter: new Adapter() });

// test("Test component output", () => {
//   const container = document.createElement("div");
//   ReactDOM.render(<Items items={[]} />, container);

//   expect(container.textContent).toBe("no items list");
// });

const myFunc = x => {
  return x + 10;
};
const mockFunc = jest.fn(myFunc);
test("testing mock function", () => {
  mockFunc(1);
  mockFunc(2);
  expect(mockFunc.mock.calls.length).toBe(2);
  expect(mockFunc.mock.results[0].value).toBe(11);
  expect(mockFunc.mock.results[1].value).toBe(12);
});

describe("<Note />", () => {
  let wrapper;
  it("should render without error", () => {
    wrapper = mount(<Items items={[]} />);
  });

  it("should have paragraph node ", () => {
    wrapper = shallow(<Items items={[]} />);
    expect(wrapper.find("p").text()).toEqual("Hello Jest");
  });

  it("should have list if props array not empty", () => {
    wrapper = shallow(<Items items={[1, 2, 3]} />);
    expect(wrapper.find(".list")).toHaveLength(1);
  });

  it("should not have list if props array is empty", () => {
    wrapper = shallow(<Items items={[]} />);
    expect(wrapper.find("ul").exists()).toBe(false);
  });

  describe("form and input check", () => {
    let text = "some dummy text";
    wrapper = mount(<Items items={[]} />);

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);

    beforeEach(() => {
      wrapper.find("input").simulate("change", {
        target: { value: text }
      });
    });

    it("should set input value to state", () => {
      expect(setState).toHaveBeenCalledWith(text);
    });
  });
});
