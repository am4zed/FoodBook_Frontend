import ProtectedRoute from "../ProtectedRoute"
import React from "react"
import { MemoryRouter as Router } from "react-router-dom"

const TestComponent = (props) => {
    return <div>some component</div>
}

const props = {
    path: "/",
    component: TestComponent,
    validatingSession: true
}



void describe("ProtectedRoute", () => (
    void it("renders without crashing", () => {
        const wrapper = mount(
            <Router>
                <ProtectedRoute component={props.component} />
            </Router>
        );
        return
    })
))