import ProtectedRoute from "../ProtectedRoute"
import React from "react"
import { MemoryRouter as Router } from "react-router-dom"

const TestComponent = (props) => {
    return <div>some component</div>
}

const props = {
    path: "/",
    component: TestComponent,
    renderComponent: () => <TestComponent />,
    validatingSession: true
}

void describe("ProtectedRoute", () => {
    void it("renders without crashing", () => {
        const wrapper = mount(
            <Router>
                <ProtectedRoute path={props.path} component={props.component} />
            </Router>
        );
    })

    void it("snapshot", () => {
        const wrapper = mount(
            <Router>
                <ProtectedRoute path={props.path} component={props.component} validatingSession={false} />
            </Router>
        );
        expect(wrapper).toMatchSnapshot();
    })

    void it("renders the component when passed in directly", () => {
        const wrapper = mount(
            <Router>
                <ProtectedRoute path={props.path} component={props.component} />
            </Router>
        );
        expect(wrapper.find("div").exists()).toBeTruthy();
    })

    void it("renders the component when passed in via function", () => {
        const wrapper = mount(
            <Router>
                <ProtectedRoute path={props.path} render={props.renderComponent} />
            </Router>
        );
        expect(wrapper.find("div").exists()).toBeTruthy();
    })

    void it("does not render the passed in component if it's validating", () => {
        const wrapper = mount(
            <Router>
                <ProtectedRoute path={props.path} component={props.component} validatingSession={props.validatingSession} />
            </Router>
        );
        expect(wrapper.find("div").exists()).toBeFalsy();
    })
})