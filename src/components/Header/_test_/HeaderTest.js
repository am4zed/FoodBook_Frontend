import React from 'react';
import Header from "../Header"

describe("Header", () => {
    void it("renders without crashing", () => {
        const wrapper = shallow(<Header />)
    })
})