import React from "react"
import Searchbar from "../Searchbar"

const props = {
    onSubmit: sinon.spy()
}

describe("searchbar", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Searchbar />);
    });

    xit("snapshot", () => {
        // TODO
    });

    it("has state for current value of the input", () => {
        const wrapper = shallow(<Searchbar />);
        expect(wrapper.state().value).toBeDefined();
    })

    it("has onSubmit prop", () => {
        const wrapper = shallow(<Searchbar onSubmit={props.onSubmit} />);
        const instance = wrapper.instance();
        expect(instance.props.onSubmit).toBeDefined()
    })

    it("has a form element", () => {
        const wrapper = shallow(<Searchbar />);
        expect(wrapper.exists("form")).toBeTruthy();
    })

    it("has an input", () => {
        const wrapper = shallow(<Searchbar />);
        expect(wrapper.exists("input")).toBeTruthy();
    })

    it("calls the onChange when the input changes", () => {
        const evt = { target: { name: "searchbar", value: "t" } }
        const wrapper = shallow(<Searchbar />);
        const instance = wrapper.instance();
        const spy = sinon.spy(instance, "onChange");
        wrapper.find("input").simulate('change', evt)
        expect(spy.calledOnce).toBeTruthy();
    })

    it("updates the state with the value in the input", () => {
        const evt = { target: { name: "searchbar", value: "t" } }
        const wrapper = shallow(<Searchbar />);
        wrapper.find("input").simulate('change', evt)
        expect(wrapper.state().value).toEqual("t")
    })

    it("calls onSubmit when submitted", () => {
        const { onSubmit } = props;
        const wrapper = shallow(<Searchbar onSubmit={onSubmit} />);
        const instance = wrapper.instance();
        wrapper.find("form").simulate("submit");
        expect(onSubmit.calledOnce).toBeTruthy();
    });

})