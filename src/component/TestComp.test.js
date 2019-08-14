import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TestComp from "./TestComp";

configure({ adapter: new Adapter() });

describe("chek setState on input change", () => {
  const testComp = shallow(<TestComp />);
  const nameState = "Milisav";

  beforeEach(() => {
    testComp
      .find(".nameInput")
      .simulate("change", { target: { value: nameState } });
  });

  afterEach(() => {
    testComp.setState({ name: "" });
  });

  it("should be input value", () => {
    expect(testComp.state().name).toBe(nameState);
  });

  it("should show state/name in header", () => {
    expect(testComp.find("h2").text()).toBe(nameState);
  });

  it('should render "Test component" in main header', () => {
    expect(testComp.find("h1").text()).toBe("Test component");
  });

  it("should print state/name in console", () => {
    const fakeEvent = { preventDefault: () => console.log("preventDefault") };
    testComp.find("form").simulate("submit", fakeEvent);
  });
});
