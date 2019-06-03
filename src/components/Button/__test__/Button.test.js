import React from 'react';
import Button from "../Button";

const onClick = sinon.spy();

describe("Button", () => {
    void it("renders without crashing", () => {
        shallow(<Button />)
    });

    void test("snapshot", () => {
        const wrapper = shallow(<Button />)
        expect(wrapper).toMatchSnapshot();
    })

    void it("has a button element", () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.exists("button")).toBeTruthy();
    });

    void it("has some text to display", () => {
        const wrapper = shallow(<Button value="text" />);
        expect(wrapper.find("button").props().value).toEqual("text");

    });

    void it("has a className for styling", () => {
        const wrapper = shallow(<Button className="button" />);
        expect(wrapper.find("button").props().className).toEqual("button");

    })

    void it("calls onClick when the button is clicked", () => {
        const wrapper = shallow(<Button onClick={onClick} />);
        wrapper.find("button").simulate("click");
        expect(onClick.calledOnce).toBeTruthy();
    });
})